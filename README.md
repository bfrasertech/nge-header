# nge-header-solution

## Summary

Short summary on functionality and used technologies.

[picture of the solution in action, if possible]

## Used SharePoint Framework Version

![version](https://img.shields.io/badge/version-1.11-green.svg)

## Applies to

-   [SharePoint Framework](https://aka.ms/spfx)
-   [Microsoft 365 tenant](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)

> Get your own free development tenant by subscribing to [Microsoft 365 developer program](http://aka.ms/o365devprogram)

## Prerequisites

> Any special pre-requisites?

## Solution

| Solution    | Author(s)                                               |
| ----------- | ------------------------------------------------------- |
| folder name | Author details (name, company, twitter alias with link) |

## Version history

| Version | Date             | Comments        |
| ------- | ---------------- | --------------- |
| 1.1     | March 10, 2021   | Update comment  |
| 1.0     | January 29, 2021 | Initial release |

## Disclaimer

**THIS CODE IS PROVIDED _AS IS_ WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Minimal Path to Awesome

-   Clone this repository
-   Ensure that you are at the solution folder
-   in the command-line run:
    -   **npm install**
    -   **gulp serve**

> Include any additional steps as needed.

## Features

Description of the extension that expands upon high-level summary above.

This extension illustrates the following concepts:

-   topic 1
-   topic 2
-   topic 3

> Notice that better pictures and documentation will increase the sample usage and the value you are providing for others. Thanks for your submissions advance.

> Share your web part with others through Microsoft 365 Patterns and Practices program to get visibility and exposure. More details on the community, open-source projects and other activities from http://aka.ms/m365pnp.

## References

-   [Getting started with SharePoint Framework](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)
-   [Building for Microsoft teams](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/build-for-teams-overview)
-   [Use Microsoft Graph in your solution](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/get-started/using-microsoft-graph-apis)
-   [Publish SharePoint Framework applications to the Marketplace](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/publish-to-marketplace-overview)
-   [Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp) - Guidance, tooling, samples and open-source controls for your Microsoft 365 development

## Development Info

-   Local workbench url https://localhost:5432/workbench
-   SP based workbench url /\_layouts/workbench.aspx
-   Note: workbench does not work for extensions. You will need to modify /config/serve.json to include the appropriate pageUrl in both default and ngeHeaderCustomization sections
-   When debugging locally you will sometimes get the error "Error: Script error for: https://localhost:4321/temp/manifests.js http://requirejs.org/docs/errors.html#scripterror"
    In that case browse directly to https://localhost:4321/ accept the cert warning continue on. Then debugging should work normally.

## Build instructions
- This project depends on the  https://rallen0977@dev.azure.com/rallen0977/NGE%20SharePoint%20Online%20Migration/_git/ScotHillier repo
- download this repo and the above repo into side by side folders e.g. /projects/guided-search and /projects/scothillier
- run gulp build from the command line in both the scothillier/NGELibrary and the scothillier/NGEMyTools folders
- you should now be able to run gulp build or any of the spfx gulp commands such as gulp serve, gulp bundle, etc.