export default function attackOption(obj) {
  const result = [];
  for (const item of obj.special) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = item;

    result.push({
      id,
      name,
      icon,
      description,
    });
  }
  return result;
}
