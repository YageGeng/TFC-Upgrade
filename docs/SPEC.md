# TFC-Upgrade 初始化规格

## 目标

本项目用于制作一款基于 TerraFirmaCraft 的 Minecraft 1.21.1 整合包。初始化阶段只建立可持续维护的项目骨架、Git 管理方式、packwiz 元数据和最小可运行的 TFC 基础依赖。

## 技术选择

- Minecraft 版本固定为 `1.21.1`。
- Mod Loader 使用 `NeoForge`，当前由 packwiz 解析为 `21.1.233`。
- 核心玩法 Mod 使用 `TerraFirmaCraft 4.x`。
- Mod 元数据使用 `packwiz` 管理，不把下载后的 `.jar` 文件提交到 Git。
- 发布客户端包时优先导出 `.mrpack`。
- 服务端包使用独立脚本导出基础清单，后续再加入自动化服务端构建。

## 仓库结构

- `pack/`：packwiz 项目目录，包含 `pack.toml`、`index.toml` 和 `mods/*.pw.toml`。
- `docs/`：项目规格、计划、Mod 清单和变更记录。
- `server/`：服务端部署说明和示例配置。
- `scripts/`：客户端和服务端导出脚本。
- `releases/`：本地构建产物目录，不纳入 Git。

## Git 管理规则

- 提交 packwiz 元数据、配置、脚本和文档。
- 忽略本地导出产物、下载后的 Mod JAR、启动器运行状态、存档、日志和崩溃报告。
- 每次加入或移除 Mod 后，运行 `packwiz refresh` 并同步更新 `docs/MODLIST.md`。
- 每次面向玩家的变更都记录到 `docs/CHANGELOG.md`。

## 初始化完成标准

- 仓库已经初始化为 Git 仓库，并使用 `main` 分支。
- packwiz 项目已经固定到 Minecraft `1.21.1` 和 NeoForge。
- TerraFirmaCraft 与必要依赖 Patchouli 已加入 packwiz 管理。
- 可以导出客户端 `.mrpack`。
- 文档说明后续如何管理、导出和维护整合包。
