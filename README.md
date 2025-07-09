# Open Source 98.css Based Browser Source OBS / Twitch Overlays 

### This project contains multiple Windows 98 OBS / Twitch overlays designed for use with the OBS Browser window system. 

![Screenshot 2025-07-08 21-42-28](https://github.com/user-attachments/assets/295d9b97-da18-4965-b528-28c182a6d9cf)
*Follower count/goal and WindowBox shown above are currently in the repository, the desktop icons and taskbar are a seperate work in progress side project. Not shown in the image is the notepad overlay.


## Setup

### Deploy with Docker

Install from the command line 
```ps
docker pull ghcr.io/gatorzgaming/98css-obs-templates:latest
```
Github Releases are currently unavaible, however you'll be able to find them [here](https://github.com/gatorzgaming/98css-obs-templates/releases) once they are setup. 


## Twitch Intergration 

You will need to log into your [`Twitch Developer Console`](https://dev.twitch.tv/console) to create the `App` required for this intergration
More in-depth instructions for these step are planned to be added to the documentation. 

## Documentation

Documentation for this project is *planned*, you can help by submmiting issues and pull request on the [Github Page](https://github.com/Gatorzgaming/98css-obs-templates/) for this project. 

## Contributing

Suggestions for overlays, further twitch intergration ideas, and pull request with your own overlays are all welcome! 

You'll need [`98css`](https://github.com/Gatorzgaming/98css-obs-templates/pkgs/container/98css-obs-templates) for contrubing webpages and [`Svelte`](https://github.com/sveltejs/svelte) for contrubting to the backend.
More info on setting up Svelte is avaible on the [Offical Documentation](https://svelte.dev/docs/kit/introduction) and [here in this README](./#sv)



## Instructions for Svelte, a framework this project uses. 

### ⚠️ These instructions are currently a placeholder until more detailed ones can be made but they should help get you going in the meantime. ⚠️

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

### Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

### Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
