export default function toPascalCase(value: string) {
  return value[0].toUpperCase() + value.substring(1)
}
