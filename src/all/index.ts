import { chain, Rule, schematic, Tree } from '@angular-devkit/schematics';
import { getWorkspace } from '@schematics/angular/utility/config';
import { buildDefaultPath, getProject } from '@schematics/angular/utility/project';
import { parseName } from '@schematics/angular/utility/parse-name';
import { dasherize } from '@angular-devkit/core/src/utils/strings';

export function all(_options: any): Rule {

  return (tree: Tree) => {
    const workspace = getWorkspace(tree);
    const projectName = _options.project || Object.keys(workspace.projects)[0];
    const project = getProject(workspace, projectName);
    const path = _options.path || buildDefaultPath(project as any);
    console.log('path', path);

    const parserPath = parseName(path, _options.name);
    console.log('parserPath', parserPath);


    const nestedOptions = {
      ..._options,
      name: parserPath.name,
      path: `${parserPath.path}/${dasherize(_options.name)}`
    }

    return chain([
      schematic('module', _options),
      schematic('info-component', _options),
      schematic('service', nestedOptions),
      schematic('error-configuration', nestedOptions),
    ]);
  };

}
