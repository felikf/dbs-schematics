import { apply, mergeWith, move, Rule, SchematicContext, template, Tree, url } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { getWorkspace } from '@schematics/angular/utility/config';
import { buildDefaultPath, getProject } from '@schematics/angular/utility/project';
import { parseName } from '@schematics/angular/utility/parse-name';

import { Schema } from './schema';

export function dbsErrorConfiguration(_options: Schema): Rule {

  return (tree: Tree, _context: SchematicContext) => {
    const workspace = getWorkspace(tree);
    const projectName = _options.project || Object.keys(workspace.projects)[0];
    const project = getProject(workspace, projectName);
    const path = _options.path || buildDefaultPath(project as any);
    const parserPath = parseName(path, _options.name);

    _options.name = parserPath.name;
    _options.path = parserPath.path;

    const sourceTemplate = url('./files');
    const sourceParametrizeTemplate = apply(sourceTemplate, [
        template({
          ..._options,
          ...strings
        }),
      move(parserPath.path)
    ]);

    tree = mergeWith(sourceParametrizeTemplate)(tree, _context) as Tree;

    return tree;
  };

}
