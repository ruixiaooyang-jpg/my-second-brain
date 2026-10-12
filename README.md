# My Second Brain V1.0

A bilingual, browser-local personal knowledge base. HTML, CSS and JavaScript; no build step or database required.

## What works
- Workspace, multiple knowledge bases, bilingual reading and search.
- ETF5248 Lectures 1–7: 50 concepts, 26 case studies, 22 practice sets and 104 original study records.
- Interactive graph: 76 original course nodes, 78 explicit relations; personal cards and user-confirmed links appear dynamically.
- Personal-card creation, editing, confirmed deletion, local persistence and JSON backup/restore.
- Text PDF extraction, physical-page tracking, manual drafts and review before saving.
- Local KaTeX formulas, source pages, graphical LP demonstration and quiz.
- Responsive layout and graph focus mode.

## 使用 / Usage
Open `index.html`, or visit the deployed site. Choose a base, then Course learning, Knowledge graph, All knowledge or Add knowledge.
在“全部知识点 → 管理与备份”中导出/导入 JSON。知识卡可选择内容类型并勾选同库关联。

## Data boundaries
Personal notes stay in each visitor’s browser, not on the website server. Clearing browser storage can erase notes. Different browsers and URLs have separate storage; export/import JSON to transfer notes. The website does not automatically share the owner's ApplePie or other private notes with visitors.
JSON includes personal cards, their types and relations. It does not include uploaded PDF binaries or the static course files. Uploaded files and unsaved PDF drafts last for the current session only.
No accounts, cloud synchronization or AI Tutor are implemented. Mock AI is explicitly simulated and requires the separate local development server. This static deployment does not provide a Gemini backend, API key or public AI endpoint. Manual PDF extraction remains usable without AI.

## Course attribution
Course material is based on ETF5248 lecture slides. This is a personal study project, not an official Monash University site. Slide paraphrases, supplementary explanations and authored exercises are labeled; citations use physical PDF pages. Existing source ambiguities remain flagged. A working citation link is not proof of academic correctness.

## Free static deployment / GitHub Pages
Publish this folder’s **contents** to a public repository: `index.html` at the repository root. Preserve `vendor`, `course-data`, `course-materials` and `.nojekyll`.
In repository Settings → Pages, select Deploy from a branch, the uploaded branch and `/ (root)`; use the URL GitHub returns after deployment succeeds.
Upload the extracted files, not the ZIP itself. Do not upload the parent development folder: it contains local configuration and private test/backup artifacts that are not part of this release.
No package installation, build command, paid API or custom domain is required. GitHub Free supports Pages from public repositories; see https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages .

## Validation
The latest interface and dynamic-card regression suites passed 13 grouped browser checks before packaging. The release preparation additionally compares every shipped asset byte-for-byte with the tested site. Live deployment is not confirmed until an actual deployment URL is returned and tested.

## Local development project
The original checkout keeps the local launchers and server separately; these are deliberately excluded from this static release. Do not put secrets, personal JSON backups, or Codex-Memory into this folder.
