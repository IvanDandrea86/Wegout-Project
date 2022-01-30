export function randomEnum(anEnum:any) {
    const enumValues = Object.keys(anEnum)
      .map(n => anEnum[n])
     const randomIndex = Math.floor(Math.random() * enumValues.length)
     const randomEnumValue = enumValues[randomIndex]
    return randomEnumValue;
  }

