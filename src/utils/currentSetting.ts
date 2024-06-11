import { langDomain, menuDomain, seoDomain, settingDomain, urlDomain } from "./mapSetting";

export function currentByDomain(data:any){
    let current:any={};
   
    try {
        current.setting = settingDomain[data]?settingDomain[data]:settingDomain["default"];
      /*   current.map_url=urlDomain[data]?urlDomain[data]:urlDomain["default"];
        current.map_seo = seoDomain[data]?seoDomain[data]:seoDomain["default"];
        current.map_lang = langDomain[data]?langDomain[data]:langDomain["default"];
        current.Menu = menuDomain[data]?menuDomain[data].data_menu:menuDomain["default"].data_menu;
        current.Menu_Lang = menuDomain[data].data_menu_lang?menuDomain[data].data_menu_lang:menuDomain["default"].data_menu_lang; */
        current.map_url=urlDomain["default"];
        current.map_seo = seoDomain["default"];
        current.map_lang = langDomain["default"];
        current.Menu = menuDomain["default"].data_menu;
        current.Menu_Lang =menuDomain["default"].data_menu_lang;
        
        current.data_uri = current.map_url.data_uri;

        current.uri_select = current.map_url.data_uri.find((p:any) => p.key_type == current.setting.key_type_defalt);
        current.type_select = current.map_url.data_type.find((p:any) => p.key_type == current.setting.key_type_defalt);
        if (current.type_select != null && current.type_select!=undefined)
        {
            current.seo_select = current.map_seo.data_seo.find((p:any) => p.key_lang == current.type_select.key_lang).data;
            var lang_select = current.map_lang.data_lang.find((p:any) => p.key_lang == current.type_select.key_lang);
            if (lang_select != null && lang_select!=undefined)
            { 
                current.menu_lang_select = current.Menu_Lang.find((p:any) => p.key_lang == current.type_select.key_lang);
                current.lable_select = lang_select.data_lable.find((p:any) => p.key_mode == current.type_select.key_mode);
                current.date_select = lang_select.data_date;
                current.lable_info = lang_select.lable_info;
            }
        }
        return current;
    } 
    catch (e) 
    {
      return current;
    }
}
export function currentByTypeUri(data:any,typeUri:any){
    let current:any={};
    
    try {
        current.setting = settingDomain[data]?settingDomain[data]:settingDomain["default"];
    /*     current.map_url=urlDomain[data]?urlDomain[data]:urlDomain["default"];
        current.map_seo = seoDomain[data]?seoDomain[data]:seoDomain["default"];
        current.map_lang = langDomain[data]?langDomain[data]:langDomain["default"];
        current.Menu = menuDomain[data]?menuDomain[data].data_menu:menuDomain["default"].data_menu;
        current.Menu_Lang = menuDomain[data].data_menu_lang?menuDomain[data].data_menu_lang:menuDomain["default"].data_menu_lang; */
        current.map_url=urlDomain["default"];
        current.map_seo = seoDomain["default"];
        current.map_lang = langDomain["default"];
        current.Menu = menuDomain["default"].data_menu;
        current.Menu_Lang =menuDomain["default"].data_menu_lang;
        current.data_uri = current.map_url.data_uri;

        current.uri_select = current.map_url.data_uri.find((p:any) => p.key_uri == typeUri);
        current.type_select = current.map_url.data_type.find((p:any) => p.key_type == current.uri_select.key_type);
        if (current.type_select != null && current.type_select!=undefined)
        {
            current.seo_select = current.map_seo.data_seo.find((p:any) => p.key_lang == current.type_select.key_lang).data;
            var lang_select = current.map_lang.data_lang.find((p:any) => p.key_lang == current.type_select.key_lang);
            if (lang_select != null && lang_select!=undefined)
            { 
                current.menu_lang_select = current.Menu_Lang.find((p:any) => p.key_lang == current.type_select.key_lang);
                current.lable_select = lang_select.data_lable.find((p:any) => p.key_mode == current.type_select.key_mode);
                current.date_select = lang_select.data_date;
                current.lable_info = lang_select.lable_info;
            }
        }
        return current;
    } 
    catch (e) 
    {
      return current;
    }
}
export function currentByKeyType(data:any,keyType:any){
    let current:any={};
    try {
       /*  current.setting = settingDomain[data]?settingDomain[data]:settingDomain["default"];
        current.map_url=urlDomain[data]?urlDomain[data]:urlDomain["default"];
        current.map_seo = seoDomain[data]?seoDomain[data]:seoDomain["default"];
        current.map_lang = langDomain[data]?langDomain[data]:langDomain["default"];
        current.Menu = menuDomain[data]?menuDomain[data].data_menu:menuDomain["default"].data_menu;
        current.Menu_Lang = menuDomain[data].data_menu_lang?menuDomain[data].data_menu_lang:menuDomain["default"].data_menu_lang; */
        current.map_url=urlDomain["default"];
        current.map_seo = seoDomain["default"];
        current.map_lang = langDomain["default"];
        current.Menu = menuDomain["default"].data_menu;
        current.Menu_Lang =menuDomain["default"].data_menu_lang;
        current.data_uri = current.map_url.data_uri;

        current.uri_select = current.map_url.data_uri.find((p:any) => p.key_type == keyType);
        current.type_select = current.map_url.data_type.find((p:any) => p.key_type == keyType);
        if (current.type_select != null && current.type_select!=undefined)
        {
            current.seo_select = current.map_seo.data_seo.find((p:any) => p.key_lang == current.type_select.key_lang).data;
            var lang_select = current.map_lang.data_lang.find((p:any) => p.key_lang == current.type_select.key_lang);
            if (lang_select != null && lang_select!=undefined)
            { 
                current.menu_lang_select = current.Menu_Lang.find((p:any) => p.key_lang == current.type_select.key_lang);
                current.lable_select = lang_select.data_lable.find((p:any) => p.key_mode == current.type_select.key_mode);
                current.date_select = lang_select.data_date;
                current.lable_info = lang_select.lable_info;
            }
        }
        return current;
    } 
    catch (e) 
    {
      return current;
    }
}
export function currentKeyType(current:any,keyType:any){
    if(!current)
        return null;
    let findCurrent=current;
    try {
        findCurrent.uri_select = current.map_url.data_uri.find((p:any) => p.key_type == keyType);
        findCurrent.type_select = current.map_url.data_type.find((p:any) => p.key_type == keyType);
        if (findCurrent.type_select != null && current.type_select!=undefined)
        {
            findCurrent.seo_select = current.map_seo.data_seo.find((p:any) => p.key_lang == findCurrent.type_select.key_lang).data;
            var lang_select = current.map_lang.data_lang.find((p:any) => p.key_lang == findCurrent.type_select.key_lang);
            if (lang_select != null && lang_select!=undefined)
            { 
                findCurrent.menu_lang_select = findCurrent.Menu_Lang.find((p:any) => p.key_lang == findCurrent.type_select.key_lang);
                findCurrent.lable_select = lang_select.data_lable.find((p:any) => p.key_mode == findCurrent.type_select.key_mode);
                findCurrent.date_select = lang_select.data_date;
                findCurrent.lable_info = lang_select.lable_info;
            }
        }
        return findCurrent;
    } 
    catch (e) 
    {
      return current;
    }
}