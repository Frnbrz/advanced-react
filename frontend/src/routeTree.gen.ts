/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as JobsImport } from './routes/jobs'
import { Route as AuthenticatedImport } from './routes/_authenticated'
import { Route as IndexImport } from './routes/index'
import { Route as AuthenticatedProfileImport } from './routes/_authenticated/profile'
import { Route as AuthenticatedInterviewImport } from './routes/_authenticated/interview'
import { Route as AuthenticatedCreateImport } from './routes/_authenticated/create'
import { Route as AuthenticatedCodeImport } from './routes/_authenticated/code'
import { Route as AuthenticatedApplyImport } from './routes/_authenticated/apply'
import { Route as AuthenticatedJobsJobIdImport } from './routes/_authenticated/jobs.$jobId'

// Create/Update Routes

const JobsRoute = JobsImport.update({
  path: '/jobs',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedRoute = AuthenticatedImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedProfileRoute = AuthenticatedProfileImport.update({
  path: '/profile',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedInterviewRoute = AuthenticatedInterviewImport.update({
  path: '/interview',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedCreateRoute = AuthenticatedCreateImport.update({
  path: '/create',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedCodeRoute = AuthenticatedCodeImport.update({
  path: '/code',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedApplyRoute = AuthenticatedApplyImport.update({
  path: '/apply',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedJobsJobIdRoute = AuthenticatedJobsJobIdImport.update({
  path: '/jobs/$jobId',
  getParentRoute: () => AuthenticatedRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated': {
      id: '/_authenticated'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthenticatedImport
      parentRoute: typeof rootRoute
    }
    '/jobs': {
      id: '/jobs'
      path: '/jobs'
      fullPath: '/jobs'
      preLoaderRoute: typeof JobsImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated/apply': {
      id: '/_authenticated/apply'
      path: '/apply'
      fullPath: '/apply'
      preLoaderRoute: typeof AuthenticatedApplyImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/code': {
      id: '/_authenticated/code'
      path: '/code'
      fullPath: '/code'
      preLoaderRoute: typeof AuthenticatedCodeImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/create': {
      id: '/_authenticated/create'
      path: '/create'
      fullPath: '/create'
      preLoaderRoute: typeof AuthenticatedCreateImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/interview': {
      id: '/_authenticated/interview'
      path: '/interview'
      fullPath: '/interview'
      preLoaderRoute: typeof AuthenticatedInterviewImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/profile': {
      id: '/_authenticated/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof AuthenticatedProfileImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/jobs/$jobId': {
      id: '/_authenticated/jobs/$jobId'
      path: '/jobs/$jobId'
      fullPath: '/jobs/$jobId'
      preLoaderRoute: typeof AuthenticatedJobsJobIdImport
      parentRoute: typeof AuthenticatedImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AuthenticatedRoute: AuthenticatedRoute.addChildren({
    AuthenticatedApplyRoute,
    AuthenticatedCodeRoute,
    AuthenticatedCreateRoute,
    AuthenticatedInterviewRoute,
    AuthenticatedProfileRoute,
    AuthenticatedJobsJobIdRoute,
  }),
  JobsRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_authenticated",
        "/jobs"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_authenticated": {
      "filePath": "_authenticated.tsx",
      "children": [
        "/_authenticated/apply",
        "/_authenticated/code",
        "/_authenticated/create",
        "/_authenticated/interview",
        "/_authenticated/profile",
        "/_authenticated/jobs/$jobId"
      ]
    },
    "/jobs": {
      "filePath": "jobs.tsx"
    },
    "/_authenticated/apply": {
      "filePath": "_authenticated/apply.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/code": {
      "filePath": "_authenticated/code.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/create": {
      "filePath": "_authenticated/create.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/interview": {
      "filePath": "_authenticated/interview.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/profile": {
      "filePath": "_authenticated/profile.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/jobs/$jobId": {
      "filePath": "_authenticated/jobs.$jobId.tsx",
      "parent": "/_authenticated"
    }
  }
}
ROUTE_MANIFEST_END */
