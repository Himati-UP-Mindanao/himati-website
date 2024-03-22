# Front-End Guide 

## Setting Up Your Local Environment

- Ensure to have `node v18.17+` and `npm`.
- Clone the repository.
- Open the repository in your IDE.
- Open your IDE's terminal and install all the dependencies by running `npm intsall`. 
- Finally, run `npm run dev` and click the provided link for live preview. HAPPY CODING!

![image](https://github.com/Himati-UP-Mindanao/himati-website/assets/85869308/b8747ccd-7203-4171-8c52-592d9c0c86b7)

## Directory Guide 

We will mostly work in the `app` folder.

![image](https://github.com/Himati-UP-Mindanao/himati-website/assets/85869308/e1db70f3-ae0e-46ee-b007-4b841f9c5f82)

Inside our app folder, we have these directories: 
- `(pages)` - a route group which contains all the routable pages.
- `components` - contains all **reusable** components all throughout the project.
- `hooks` - contains all the **custom hooks** use in this project. 
- `lib` - contains the utils.js ShadCN use **(No need to modify)**.
- `styles` - contains all the css files.

`public` - contains all the static assets (logos, gifs, fonts). 

## `app` Routing conventions

This project use App Router provided by NextJS. For more information, you can read the [here](https://nextjs.org/docs/getting-started/project-structure)

### Routing Files 

- `page.jsx` - Page
- `layout.jsx` - Layout
- `loading.jsx` - Loading UI
- `not-found.jsx` - Not Found UI
- `error.jsx` - Error UI
- `global-error.jsx` - Global Error UI 
- `route.js` - API endpoint
- `template.jsx` - Re-rendered Layout
- `default.jsx` - Parallel route fallback page.

### Nested Routes
- `folder` - Route segment
- `folder/folder` - Nested route segment

### Dynamic Routes
- `[folder]` - Dynamic route segment
- `[...folder]` - catch-all route segment
- `[[...folder]]` - Optional catch-all route segment

For example we want to create a `page` with a path `/auth/register`, `app/(pages)/auth/register/page.jsx` should **exist**. (Note: without `page.jsx` a folder is not routable)

## 

If in need for clarification, feel free to ask.

##

JN
