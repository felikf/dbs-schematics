import { ErrorConfig, ErrorSeverity } from '@core/services/error/error-configurations';

/**
 * Error configuration for <%= name %>
 */
export const ERROR_MAPPING: ErrorConfig[] = [
  {
    id: 'TODO',
    name: 'TODO_NAME_DATA',
    severity: ErrorSeverity.criticalError,
    url: '/products/{cgpId}/TODO_URL'
  },
  {
    id: 'TODO',
    name: 'TODO_NAME_ACTIONS',
    severity: ErrorSeverity.warningError,
    url: '/products/{cgpId}/dashboard/actionlinks'
  },
  {
    id: 'TODO',
    name: 'TODO_NAME_WCM',
    severity: ErrorSeverity.warningError,
    url: '{wcmId}.htm'
  }
];
