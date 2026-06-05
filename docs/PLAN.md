# TFC-Upgrade 初始化计划

## 阶段一：仓库初始化

- 初始化 Git 仓库。
- 将默认分支命名为 `main`。
- 添加 `.gitignore`，排除本地运行状态、下载产物和导出产物。

## 阶段二：packwiz 初始化

- 在 `pack/` 目录中初始化 packwiz 项目。
- 设置整合包名称为 `TFC-Upgrade`。
- 设置整合包版本为 `0.1.0`。
- 设置 Minecraft 版本为 `1.21.1`。
- 设置 Mod Loader 为 `NeoForge`。

## 阶段三：基础 Mod 集

- 通过 Modrinth 添加 TerraFirmaCraft。
- 接受 packwiz 自动解析的必要依赖。
- 运行 `packwiz refresh` 更新索引。
- 用 `packwiz list` 验证已加入 Mod。

## 阶段四：项目文档

- 编写 `README.md` 说明目录结构和常用命令。
- 编写 `docs/SPEC.md` 记录初始化规格。
- 编写 `docs/MODLIST.md` 记录当前 Mod 清单。
- 编写 `docs/CHANGELOG.md` 记录初始化变更。
- 编写 `server/README.md` 和 `server/server.properties.example` 作为后续服务端打包基础。

## 阶段五：导出验证

- 添加 `scripts/export-client.sh` 导出 `.mrpack`。
- 添加 `scripts/export-server.sh` 生成服务端发布目录。
- 运行 packwiz 刷新、列出 Mod、导出客户端包。
- 检查 Git 状态，确认所有需要追踪的文件都在工作区。
