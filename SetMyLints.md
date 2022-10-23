
# Set My Lints

Herramienta para la rápida configuración de Git Hooks, Linters y Prettier.

Basta responder unas cuantas preguntas de preferencias y se instalará **esLint**, junton con los archivos de configuración y plugins necesarios; así como **Husky** junto con un gancho de pre-commit; **lint-staged** con un script de ejecución y, opcionalmente, **Prettier** configurado también para ejecución en commit y con archivos de configuración para evitar errores de formato al coexistir con el lint.

## Install/Execute

Desde tu archivo raíz de proyecto, ejecuta el siguiente comando:

```bash
npx set-my-lints
```

Después de ejecutar el comando, deberás responder unas cuantas preguntas.

## ¿Qué incluye y cómo modificar?

Por defecto, todo funcion _out of the box_, pero si te interesa conocer qué hay detrás de la magia o cómo personalizar algo, te comparto una lista de recursos que puedes consultar:

### eslint

Puedes visitar el [sitio oficial](https://eslint.org/) de eslint para ver la lista de plugins y configuraciones disponibles, o puedes revisar directamente su [documentación](https://eslint.org/docs/user-guide/configuring).

Dependiendo de tus respuestas, es posible que adicionalmente se instalen algunos de los siguientes plugins/configs:

- [plugin-import](https://github.com/import-js/eslint-plugin-import)
- [plugin-jsx-a11y](https://github.com/jsx-eslint/plugin-jsx-a11y)
- [plugin-react](https://github.com/jsx-eslint/plugin-react)
- [plugin-react-hooks](https://www.npmjs.com/package/plugin-react-hooks)
- [plugin-promise](https://github.com/xjamundx/plugin-promise)
- [plugin-n](https://github.com/weiran-zsd/eslint-plugin-node)
- [plugin-vue](https://github.com/vuejs/eslint-plugin-vue)
- [plugin-typescript](https://github.com/typescript-eslint/typescript-eslint)
- [parser-typescript](https://github.com/typescript-eslint/typescript-eslint/tree/d0239104f4dbffd2b5ecdb19e520c7d4b71962e0/packages/parser)
- [config-airbnb](https://github.com/airbnb/javascript)
- [config-google](https://github.com/google/eslint-config-google)
- [config-standard](https://github.com/standard/eslint-config-standard)
- [config-prettier](https://github.com/prettier/eslint-config-prettier)

### prettier

Prettier es un formateador de código que permite que los códigos sean más legibles y mantenga el formato de código original. Puedes visitar el [sitio oficial](https://prettier.io/) de prettier para ver la lista de configuraciones disponibles, o puedes revisar directamente su [documentación](https://prettier.io/docs/en/options.html).

### lint-staged

Lint-staged es un plugin que permite ejecutar un script de linting en cada archivo que se agrega, modifica o elimina en el repositorio. De modo que antes realizar commit se revisa que los archivos cumplan con los requisitos de linting para evitar errores en tu repo.

Puedes visitar el repo oficial en [github](https://github.com/okonet/lint-staged).

### husky

Husky es un plugin que permite configurar [ganchos de git](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks#_git_hooks) (Git Hooks) para realizar distintas acciones en las distintas etapas de un commit. Set-my-lints inicializa un gancho de pre-commit de modo que antes de que se registre tu commit se ejecute lint-staged y se revise el formato de tu código a través de esLint y Prettier.

Puedes visitar su [sitio web](https://typicode.github.io/husky/#/) para ver la lista de ganchos disponibles y sus configuraciones.

## TODO:


- [ ] Agregar yarn como método de instalación

