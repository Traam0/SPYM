## SPYM docs

### Folder Structure

```
root
└── assets
└── components
└── lib
  └── config
    └── [file.config.ts] | [file.config.json]
  └── data
    └── [file.ts]
  └── types
    └──[file.types.ts]
  └── utils
    └── [file.ts]
└── screens
  └──[file.screen.tsx]
└──App.tsx
└── styles
```

---

#### 1. _root_

The main directory housing the entire project.

#### 2. _assets_

Contains project-related assets such as images, fonts, or any static files.

#### 3. _components_

Home to reusable UI components used throughout the application.

#### 4. _lib_

Centralized directory for various utility libraries and configurations.

- _config:_
  Configuration files like `file.config.ts` or `file.config.json` reside here.
  hosts config files, settings  for some packages, 

- _data:_
  Stores data-related files, possibly in TypeScript format (`file.ts`).

- _types:_
  TypeScript type definitions, providing a clear structure for the application.
  files are named after `domain`.types.ts.

- _utils:_
  General utility functions or helper files for the project.

#### 5. _screens_

Houses screen components, with a file like `file.screen.tsx` for each screen.
Each file exports one function that may take props as args and return **JSX.Element**

#### 6. _App.tsx_

The main entry point for the application, where the overall structure is defined.

#### 7. _styles_

## Contains styling-related files, such as `component.styles.ts`, likely used to style components consistently.


