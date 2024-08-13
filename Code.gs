URL_WEAPON = "https://raw.githubusercontent.com/EXBO-Studio/stalcraft-database/main/ru/items/weapon/"
URL_AMMO = "https://raw.githubusercontent.com/EXBO-Studio/stalcraft-database/main/ru/items/bullet"

function findWeaponJson(nameJson, category){

  var url =  URL_WEAPON + category + "/" + nameJson + ".json"
  return JSON.parse(UrlFetchApp.fetch(url).getContentText())

}

function findAmmoJson(nameJson){

  var url =  URL_AMMO + "/" + nameJson + ".json"
  return JSON.parse(UrlFetchApp.fetch(url).getContentText())

}

function findVariantsJson(nameJson, category, variantsLevel){

  var url = URL_WEAPON + category + "/" + "_variants" + "/" + nameJson + "/" + variantsLevel + ".json"
  return JSON.parse(UrlFetchApp.fetch(url).getContentText())

}


//Waepon

function getWeaponName(nameJson, category) {

  return findWeaponJson(nameJson, category)["name"]["lines"]["ru"]

}

function getWeaponRank(nameJson, category) {

    var data = findWeaponJson(nameJson,category)["infoBlocks"][0]["elements"];

    for (let i = 0; i < data.length; i++) {
        var temp = data[i];

        try {
            var query = temp["value"]["key"].split(".");

            if (query[0] == "core" && query[1] == "rank") {
                return temp["value"]["lines"]["ru"];
            }
        } catch {
            continue;
        }
    }

    return "Не найдено";
}

function getWeaponCategory(nameJson, category) {

    var data = findWeaponJson(nameJson,category)["infoBlocks"][0]["elements"];

    for (let i = 0; i < data.length; i++) {
        var temp = data[i];

        try {
            var query = temp["key"]["key"].split(".");

            if (query[0] == "core" && query[1] == "tooltip" && query[2] == "info" && query[3] == "category") {
                return temp["value"]["lines"]["ru"]
            }
        } catch {
            continue;
        }
    }

    return "Не найдено";
}

function getWeaponWeight(nameJson, category) {

    var data = findWeaponJson(nameJson,category)["infoBlocks"][0]["elements"];

    for (let i = 0; i < data.length; i++) {
        var temp = data[i];

        try {
            var query = temp["name"]["key"].split(".");

            if (query[0] == "core" && query[1] == "tooltip" && query[2] == "info" && query[3] == "weight") {
                return temp["value"]
            }
        } catch {
            continue;
        }
    }

    return "Не найдено";
}

function getWeaponAmmoType(nameJson, category) {

    var data = findWeaponJson(nameJson,category)["infoBlocks"];

     for (let i = 0; i < data.length; i++) {
        for (const [key, value] of Object.entries(data[i])) {
            if (key === 'elements') {
                for (let i = 0; i < value.length; i++) {
                    var temp = value[i];
                    try {
                        var query = temp["value"]["key"].split(".");
                        if (query[0] == "item" && query[1] == "wpn" && query[2] == "display_ammo_types") {
                        
                            return temp["value"]["lines"]["ru"]
                        }
                    } catch {
                        continue;
                    }
                }
            }
        }
     }

    return "Не найдено";
}

function getWeaponDamage(nameJson, category) {

    var data = findWeaponJson(nameJson,category)["infoBlocks"];

     for (let i = 0; i < data.length; i++) {
        for (const [key, value] of Object.entries(data[i])) {
            if (key === 'elements') {
                for (let i = 0; i < value.length; i++) {
                    var temp = value[i];
                    try {
                        var query = temp["name"]["key"].split(".");
                        if (query[0] == "core" && query[1] == "tooltip" && query[2] == "stat_name" && query[3] == "damage_type" && query[4] == "direct") {
                        
                            return temp["value"]
                        }
                    } catch {
                        continue;
                    }
                }
            }
        }
     }

    return "Не найдено";
}

function getWeaponMinDamage(nameJson, category) {

  var data = findWeaponJson(nameJson,category)["infoBlocks"];

  for (let i = 0; i < data.length; i++) {
        var temp = data[i];

        try{
          if(temp["endDamage"]){
            return temp["endDamage"]
          }
        }
        catch{
          continue
        }
    }

  return "Не найдено";
}

function getWeaponClipSize(nameJson, category) {

    var data = findWeaponJson(nameJson,category)["infoBlocks"];

     for (let i = 0; i < data.length; i++) {
        for (const [key, value] of Object.entries(data[i])) {
            if (key === 'elements') {
                for (let i = 0; i < value.length; i++) {
                    var temp = value[i];
                    try {
                        var query = temp["name"]["key"].split(".");
                        if (query[0] == "weapon" && query[1] == "tooltip" && query[2] == "weapon" && query[3] == "info" && query[4] == "clip_size") {
                        
                            return temp["value"]
                        }
                    } catch {
                        continue;
                    }
                }
            }
        }
     }

    return "Не найдено";
}

function getWeaponMaxDistance(nameJson, category) {

  var data = findWeaponJson(nameJson,category)["infoBlocks"];

  for (let i = 0; i < data.length; i++) {
        var temp = data[i];

        try{
          if(temp["maxDistance"]){
            return temp["maxDistance"]
          }
        }
        catch{
          continue
        }
    }

  return "Не найдено";
}

function getWeaponRateOfFire(nameJson, category) {

    var data = findWeaponJson(nameJson,category)["infoBlocks"];

     for (let i = 0; i < data.length; i++) {
        for (const [key, value] of Object.entries(data[i])) {
            if (key === 'elements') {
                for (let i = 0; i < value.length; i++) {
                    var temp = value[i];
                    try {
                        var query = temp["name"]["key"].split(".");
                        if (query[0] == "weapon" && query[1] == "tooltip" && query[2] == "weapon" && query[3] == "info" && query[4] == "rate_of_fire") {
                        
                            return temp["value"]
                        }
                    } catch {
                        continue;
                    }
                }
            }
        }
     }

    return "Не найдено";
}

function getWeaponReload(nameJson, category) {

    var data = findWeaponJson(nameJson,category)["infoBlocks"];

     for (let i = 0; i < data.length; i++) {
        for (const [key, value] of Object.entries(data[i])) {
            if (key === 'elements') {
                for (let i = 0; i < value.length; i++) {
                    var temp = value[i];
                    try {
                        var query = temp["name"]["key"].split(".");
                        if (query[0] == "weapon" && query[1] == "tooltip" && query[2] == "magazine" && query[3] == "info" && query[4] == "reload_time") {
                        
                            return temp["value"]
                        }
                    } catch {
                        continue;
                    }
                }
            }
        }
     }

    return "Не найдено";
}

function getWeaponReloadTactical(nameJson, category) {

    var data = findWeaponJson(nameJson,category)["infoBlocks"];

     for (let i = 0; i < data.length; i++) {
        for (const [key, value] of Object.entries(data[i])) {
            if (key === 'elements') {
                for (let i = 0; i < value.length; i++) {
                    var temp = value[i];
                    try {
                        var query = temp["name"]["key"].split(".");
                        if (query[0] == "weapon" && query[1] == "tooltip" && query[2] == "magazine" && query[3] == "info" && query[4] == "reload_time_tactical") {
                        
                            return temp["value"]
                        }
                    } catch {
                        continue;
                    }
                }
            }
        }
     }

    return "Не найдено";
}

function getWeaponSpread(nameJson, category) {

    var data = findWeaponJson(nameJson,category)["infoBlocks"];

     for (let i = 0; i < data.length; i++) {
        for (const [key, value] of Object.entries(data[i])) {
            if (key === 'elements') {
                for (let i = 0; i < value.length; i++) {
                    var temp = value[i];
                    try {
                        var query = temp["name"]["key"].split(".");
                        if (query[0] == "weapon" && query[1] == "tooltip" && query[2] == "weapon" && query[3] == "info" && query[4] == "spread") {
                        
                            return temp["value"]
                        }
                    } catch {
                        continue;
                    }
                }
            }
        }
     }

    return "Не найдено";
}

function getWeaponHipSpread(nameJson, category) {

    var data = findWeaponJson(nameJson,category)["infoBlocks"];

     for (let i = 0; i < data.length; i++) {
        for (const [key, value] of Object.entries(data[i])) {
            if (key === 'elements') {
                for (let i = 0; i < value.length; i++) {
                    var temp = value[i];
                    try {
                        var query = temp["name"]["key"].split(".");
                        if (query[0] == "weapon" && query[1] == "tooltip" && query[2] == "weapon" && query[3] == "info" && query[4] == "hip_spread") {
                            return temp["value"]
                        }
                    } catch {
                        continue;
                    }
                }
            }
        }
     }

    return "Не найдено";
}

function getWeaponRecoil(nameJson, category) {

    var data = findWeaponJson(nameJson,category)["infoBlocks"];

     for (let i = 0; i < data.length; i++) {
        for (const [key, value] of Object.entries(data[i])) {
            if (key === 'elements') {
                for (let i = 0; i < value.length; i++) {
                    var temp = value[i];
                    try {
                        var query = temp["name"]["key"].split(".");
                        if (query[0] == "weapon" && query[1] == "tooltip" && query[2] == "weapon" && query[3] == "info" && query[4] == "recoil") {
                            return temp["value"]
                        }
                    } catch {
                        continue;
                    }
                }
            }
        }
     }

    return "Не найдено";
}

function getWeaponHorizontalRecoil(nameJson, category) {

    var data = findWeaponJson(nameJson,category)["infoBlocks"];

     for (let i = 0; i < data.length; i++) {
        for (const [key, value] of Object.entries(data[i])) {
            if (key === 'elements') {
                for (let i = 0; i < value.length; i++) {
                    var temp = value[i];
                    try {
                        var query = temp["name"]["key"].split(".");
                        if (query[0] == "weapon" && query[1] == "tooltip" && query[2] == "weapon" && query[3] == "info" && query[4] == "horizontal_recoil") {
                            return temp["value"]
                        }
                    } catch {
                        continue;
                    }
                }
            }
        }
     }

    return "Не найдено";
}

function getWeaponDrawTime(nameJson, category) {

    var data = findWeaponJson(nameJson,category)["infoBlocks"];

     for (let i = 0; i < data.length; i++) {
        for (const [key, value] of Object.entries(data[i])) {
            if (key === 'elements') {
                for (let i = 0; i < value.length; i++) {
                    var temp = value[i];
                    try {
                        var query = temp["name"]["key"].split(".");
                        if (query[0] == "weapon" && query[1] == "tooltip" && query[2] == "weapon" && query[3] == "info" && query[4] == "draw_time") {
                            return temp["value"]
                        }
                    } catch {
                        continue;
                    }
                }
            }
        }
     }

    return "Не найдено";
}

function getWeaponAimSwitch(nameJson, category) {

    var data = findWeaponJson(nameJson,category)["infoBlocks"];

     for (let i = 0; i < data.length; i++) {
        for (const [key, value] of Object.entries(data[i])) {
            if (key === 'elements') {
                for (let i = 0; i < value.length; i++) {
                    var temp = value[i];
                    try {
                        var query = temp["name"]["key"].split(".");
                        if (query[0] == "weapon" && query[1] == "tooltip" && query[2] == "weapon" && query[3] == "info" && query[4] == "aim_switch") {
                            return temp["value"]
                        }
                    } catch {
                        continue;
                    }
                }
            }
        }
     }

    return "Не найдено";
}

function getWeaponHeadDamageModifier(nameJson, category) {

    var data = findWeaponJson(nameJson,category)["infoBlocks"];

     for (let i = 0; i < data.length; i++) {
        for (const [key, value] of Object.entries(data[i])) {
            if (key === 'elements') {
                for (let i = 0; i < value.length; i++) {
                    var temp = value[i];
                    try {
                        var query = temp["text"]["key"].split(".");
                        if (query[0] == "weapon" && query[1] == "tooltip" && query[2] == "weapon"  && query[3] == "head_damage_modifier") {
                            return temp["text"]["args"]["modifier"]
                        }
                    } catch {
                        continue;
                    }
                }
            }
        }
     }

    return "Не найдено";
}

function getWeaponLimbsDamageModifier(nameJson, category) {

    var data = findWeaponJson(nameJson,category)["infoBlocks"];

     for (let i = 0; i < data.length; i++) {
        for (const [key, value] of Object.entries(data[i])) {
            if (key === 'elements') {
                for (let i = 0; i < value.length; i++) {
                    var temp = value[i];
                    try {
                        var query = temp["text"]["key"].split(".");
                        if (query[0] == "weapon" && query[1] == "tooltip" && query[2] == "weapon"  && query[3] == "limbs_damage_modifier") {
                            return temp["text"]["args"]["modifier"]
                        }
                    } catch {
                        continue;
                    }
                }
            }
        }
     }

    return "Не найдено";
}

function getWeaponDamageDecreaseStart(nameJson, category) {

  var data = findWeaponJson(nameJson,category)["infoBlocks"];

  for (let i = 0; i < data.length; i++) {
        var temp = data[i];

        try{
          if(temp["damageDecreaseStart"]){
            return temp["damageDecreaseStart"]
          }
        }
        catch{
          continue
        }
    }

  return "Не найдено";
}

function getWeaponDamageDecreaseEnd(nameJson, category) {

  var data = findWeaponJson(nameJson,category)["infoBlocks"];

  for (let i = 0; i < data.length; i++) {
        var temp = data[i];

        try{
          if(temp["damageDecreaseEnd"]){
            return temp["damageDecreaseEnd"]
          }
        }
        catch{
          continue
        }
    }

  return "Не найдено";
}

function getWeaponOverheat(nameJson, category) {

    var data = findWeaponJson(nameJson,category)["infoBlocks"];

     for (let i = 0; i < data.length; i++) {
        for (const [key, value] of Object.entries(data[i])) {
            if (key === 'elements') {
                for (let i = 0; i < value.length; i++) {
                    var temp = value[i];
                    try {
                        var query = temp["text"]["key"].split(".");
                        if (query[0] == "weapon" && query[1] == "tooltip" && query[2] == "weapon"  && query[3] == "info" &&  query[4] == "overheat_after") {
                            return temp["text"]["args"]["value"]
                        }
                    } catch {
                        continue;
                    }
                }
            }
        }
     }

    return "Не найдено";
}

// Ammo


function getAmmoPiercing(nameJson) {

    var data = findAmmoJson(nameJson)["infoBlocks"];

     for (let i = 0; i < data.length; i++) {
        for (const [key, value] of Object.entries(data[i])) {
            if (key === 'elements') {
                for (let i = 0; i < value.length; i++) {
                    var temp = value[i];
                    try {
                        var query = temp["name"]["key"].split(".");
                        if (query[0] == "weapon" && query[1] == "tooltip" && query[2] == "bullet"  && query[3] == "stat_name" && query[4] == "piercing") {
                            return temp["value"]
                        }
                    } catch {
                        continue;
                    }
                }
          }
        }
     }

    return "0";
}

function getAmmoDamage(nameJson) {

    var data = findAmmoJson(nameJson)["infoBlocks"];

     for (let i = 0; i < data.length; i++) {
        for (const [key, value] of Object.entries(data[i])) {
            if (key === 'elements') {
                for (let i = 0; i < value.length; i++) {
                    var temp = value[i];
                    try {
                        var query = temp["name"]["key"].split(".");
                        if (query[0] == "weapon" && query[1] == "tooltip" && query[2] == "bullet"  && query[3] == "stat_name" && query[4] == "damage") {
                            return temp["value"]
                        }
                    } catch {
                        continue;
                    }
                }
          }
        }
     }

    return "0";
}

//Variants

function getVariantsDamage(nameJson, category, variantsLevel){


  if(variantsLevel == 0){
    return "0"
  }

  else{
    var data = findVariantsJson(nameJson, category, variantsLevel)["infoBlocks"];

     for (let i = 0; i < data.length; i++) {
        for (const [key, value] of Object.entries(data[i])) {
            if (key === 'elements') {
                for (let i = 0; i < value.length; i++) {
                    var temp = value[i];
                    try {
                        var query = temp["name"]["key"].split(".");
                        if (query[0] == "weapon" && query[1] == "stat_factor" && query[2] == "damage") {
                            return temp["value"]
                        }
                    } catch {
                        continue;
                    }
                }
          }
        }
     }

    return "0";
  }

}

function getVariantsRateOfFire(nameJson, category, variantsLevel){

  return "0";

}

function getVariantsSpread(nameJson, category, variantsLevel){

  return "0";

}

function getVariantsMinDamage(nameJson, category, variantsLevel){

 if(variantsLevel == 0){
    return "0"
  }
  else{
    var data = findVariantsJson(nameJson, category, variantsLevel)["infoBlocks"];

    for (let i = 0; i < data.length; i++) {
      for (const [key, value] of Object.entries(data[i])) {
          if (key === 'elements') {
              for (let i = 0; i < value.length; i++) {
                  var temp = value[i];
                  try {
                      var query = temp["name"]["key"].split(".");
                      if (query[0] == "weapon" && query[1] == "stat_factor" && query[2] == "damage_distant") {
                          return temp["value"]
                        }
                  } catch {
                      continue;
                  }
            }
          }
        }
     }

    return "0";
  }
  
}


function getVariantsHighDamageDistance(nameJson, category, variantsLevel){

  return "0";

}


function getVariantsMinDamageDistance(nameJson, category, variantsLevel){

  return "0";

}











