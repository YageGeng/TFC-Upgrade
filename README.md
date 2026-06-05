# TFC-Upgrade

TFC-Upgrade 是一个基于 Minecraft 1.21.1、NeoForge 和 TerraFirmaCraft 4.x 的整合包项目。

## 项目边界

- `pack/` 保存 packwiz 管理的客户端整合包定义。
- `docs/` 保存中文规格、计划、Mod 清单和变更记录。
- `server/` 保存服务端部署说明和示例配置。
- `scripts/` 保存导出脚本。
- `releases/` 保存本地导出产物，不提交 Git。

## 常用命令

```bash
rtk packwiz list
rtk packwiz refresh
rtk packwiz modrinth export --output ../releases/TFC-Upgrade-0.1.0.mrpack
```

以上命令需要在 `pack/` 目录中执行。也可以直接运行：

```bash
rtk scripts/export-client.sh
rtk scripts/export-server.sh
```

## 当前基础版本

- Minecraft: `1.21.1`
- Loader: `NeoForge 21.1.233`
- TerraFirmaCraft: `4.1.2`
- Pack version: `0.1.0`
