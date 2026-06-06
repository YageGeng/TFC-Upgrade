// Match enchanting_with_tfc's enchanting table recipe while using the 1.21.1 TFC double sheet id.
// Keep it deterministic: remove the vanilla recipe first, then add this one.
ServerEvents.recipes(event => {
  event.remove({ output: 'minecraft:enchanting_table' });

  event
    .shaped('minecraft:enchanting_table', [' B ', 'DWD', '###'], {
      B: 'minecraft:book',
      D: 'tfc:metal/double_sheet/wrought_iron',
      W: 'minecraft:red_wool',
      '#': 'minecraft:obsidian',
    })
    .id('tfc_upgrade:custom/enchanting_table');
});
