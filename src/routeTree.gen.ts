/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as TrainunitImport } from './routes/train_unit'
import { Route as FinishunitImport } from './routes/finish_unit'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const TrainunitRoute = TrainunitImport.update({
  id: '/train_unit',
  path: '/train_unit',
  getParentRoute: () => rootRoute,
} as any)

const FinishunitRoute = FinishunitImport.update({
  id: '/finish_unit',
  path: '/finish_unit',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
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
    '/finish_unit': {
      id: '/finish_unit'
      path: '/finish_unit'
      fullPath: '/finish_unit'
      preLoaderRoute: typeof FinishunitImport
      parentRoute: typeof rootRoute
    }
    '/train_unit': {
      id: '/train_unit'
      path: '/train_unit'
      fullPath: '/train_unit'
      preLoaderRoute: typeof TrainunitImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/finish_unit': typeof FinishunitRoute
  '/train_unit': typeof TrainunitRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/finish_unit': typeof FinishunitRoute
  '/train_unit': typeof TrainunitRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/finish_unit': typeof FinishunitRoute
  '/train_unit': typeof TrainunitRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/finish_unit' | '/train_unit'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/finish_unit' | '/train_unit'
  id: '__root__' | '/' | '/finish_unit' | '/train_unit'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  FinishunitRoute: typeof FinishunitRoute
  TrainunitRoute: typeof TrainunitRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  FinishunitRoute: FinishunitRoute,
  TrainunitRoute: TrainunitRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/finish_unit",
        "/train_unit"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/finish_unit": {
      "filePath": "finish_unit.tsx"
    },
    "/train_unit": {
      "filePath": "train_unit.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
