# Mod 清单

## 基础玩法

| Mod | 版本 | 来源 | 作用域 | 说明 |
| --- | --- | --- | --- | --- |
| TerraFirmaCraft | `1.21.1-4.1.2` | Modrinth | Client + Server | TFC 核心玩法与世界生成。 |
| Patchouli | `1.21.1-93-NEOFORGE` | Modrinth | Client + Server | TFC 的游戏内说明书依赖。 |

## 管理约定

- 新增 Mod 前先确认是否支持 Minecraft `1.21.1` 和 NeoForge。
- 新增 Mod 后运行 `packwiz refresh`。
- 客户端专属 Mod 需要确认 `side = "client"`，避免进入服务端发布包。
- 服务端必需 Mod 需要确认 `side = "both"` 或等价设置。
