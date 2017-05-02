(function () {

var dict =
    {
        'a': {
            'default': true,
            'sufix': {
                'bliw' : true, 'br' : true, 'civ' : true, 'clim' : true, 'diem' : true, 'dnar' : true, 'du' : true, 'err' : true, 'fa' : true,'gug' : true, 'h' : true, 'hc' : true,
                'ho' : true, 'hpa' : true, 'htan' : true, 'ile' : true, 'iledr' : true, 'imer' : true, 'ja' : true, 'jr' : true, 'ka' : true, 'kk' : true, 'la' : true,
                'lg' : true, 'lit' : true, 'liv' : true, 'loc' : true, 'lro' : true, 'man' : true, 'may' : true, 'mini' : true, 'mlaj' : true, 'mn' : true, 'mru' : true, 
                'muz' : true, 'ng' : true, 'nnat' : true, 'np' : true, 'om' : true, 'raj' : true, 'rat' : true, 'raug' : true, 'rieb' : true, 'riev' : true, 'rik' : true,
                'riu' : true, 'rp' : true, 'ruj' : true, 'rum' : true, 'rut' : true, 'sa' : true, 'ssa' : true, 'ssu' : true, 'tai' : true, 'tano' : true, 'tari' : true,
                'tel' : true, 'terp' : true, 'toj' : true, 'tsi' : true, 'ua' : true, 'ud' : true, 'uh' : true, 'uq' : true, 'va' : true, 'vd' : true, 'vi' : true, 'vlis' : true,
                'vo' : true, 'vr' : true, 'w' : true, 'yan' : true, 'zuo': true
            }
        },
        'b': {
            'default': false,
            'sufix': { 'adani' : true }
        },
        'c': {
            'default': false,
            'sufix': { 'il':true, 'it':true, 'iv': true}
        },
        'd': {
            'default': false,
            'sufix': { 'ade':true, 'ir':true }
        },
        'e': {
            'default': true,
            'sufix': { 'ad' : true, 'aj' : true, 'ak' : true, 'bao' : true, 'bu' : true, 'cal' : true, 'ced' : true, 
                'cilef' : true, 'ciru' : true, 'cn' : true, 'curb' : true, 'dad' : true, 'deb' : true, 'di' : true, 
                'dia' : true, 'diat' : true, 'dic' : true, 'dila' : true, 'div' : true, 'dla' : true, 'dlih' : true, 
                'dlinesa' : true, 'dn' : true, 'do' : true, 'el' : true, 'g' : true, 'ge' : true, 'go' : true, 'gr' : true, 
                'gu' : true, 'hp' : true, 'ib' : true, 'ile' : true, 'ill' : true, 'in' : true, 'j' : true, 'ke' : true, 
                'ki' : true, 'klo' : true, 'kn' : true, 'ko' : true, 'ks' : true, 'ku' : true, 'lat' : true, 'lau' : true, 
                'lav' : true, 'lc' : true, 'ledr' : true, 'leg' : true, 'leit' : true, 'len' : true, 'less' : true, 
                'leu' : true, 'lh' : true, 'libat' : true, 'lil' : true, 'lir' : true, 'lled' : true, 'lo' : true, 
                'ly' : true, 'ma' : true, 'mea' : true, 'med' : true, 'mi' : true, 'ml' : true, 'mr' : true, 'ms' : true, 
                'mu' : true, 'my' : true, 'nahp' : true, 'nan' : true, 'navi' : true, 'navla' : true, 'navle' : true, 
                'navlig' : true, 'navo' : true, 'ned' : true, 'neico' : true, 'neit' : true, 'nelig' : true, 'nelsu' : true, 
                'ner' : true, 'niav' : true, 'niaw' : true, 'nidla' : true, 'nidu' : true, 'nim' : true, 'nin' : true, 
                'nio' : true, 'nitr' : true, 'nnav' : true, 'nner' : true, 'nnh' : true, 'nnoi' : true, 'noc' : true, 
                'nod' : true, 'noe' : true, 'nof' : true, 'noice' : true, 'noicla' : true, 'noide' : true, 'noih' : true, 
                'noj' : true, 'nor' : true, 'not' : true, 'nr' : true, 'nu' : true, 'oi' : true, 'on' : true, 'pe' : true, 
                'pi' : true, 'po' : true, 'pp' : true, 'py' : true, 'ras' : true, 'rb' : true, 'rd' : true, 'reb' : true, 
                'red' : true, 'rf' : true, 'ria' : true, 'rih' : true, 'ro' : true, 'rr' : true, 'rt' : true, 'sd' : true, 
                'se' : true, 'sieg' : true, 'sliw' : true, 'soj' : true, 'sr' : true, 'sse' : true, 'ssu' : true, 
                'su' : true, 'tea' : true, 'tedlaw' : true, 'tedoi' : true, 'teds' : true, 'teia' : true, 'tesin' : true, 
                'teze' : true, 'tezin' : true, 'tided' : true, 'tiu' : true, 'tl' : true, 'tna' : true, 'tne' : true, 
                'tra' : true, 'treal' : true, 'treh' : true, 'trei' : true, 'tser' : true, 'ua' : true, 'ug' : true, 
                'uo' : true, 'uqa' : true, 'uqe' : true, 'uqia' : true, 'uqini' : true, 'uqir' : true, 'uql' : true, 
                'uqo' : true, 'uqr' : true, 'use' : true, 'uso' : true, 'uzo' : true, 'vat' : true, 'vi' : true, 
                'vo' : true, 'w' : true, 'y' : true, 'z' : true, 'za' : true, 'ze' : true, 'zu': true 
            }
        },
        'f': {
            'default': false,
            'sufix': {  }
        },
        'g': {
            'default': false,
            'sufix': { 'ie' : true, 'neh' : true, 'nipm' : true, 'nob' : true, 'nuj': true }
        },
        'h': {
            'default': false,
            'sufix': { 
                    'ak' : true, 'an' : true, 'ar' : true, 's' : true, 'teb' : true, 'ter' : true, 
                    'tes' : true, 'tezil' : true, 'tezir' : true, 'tide' : true, 'tidu' : true, 
                    'tur':true  }
        },
        'i': {
            'default': false,
            'sufix': { 
                    'ale' : true, 'ana' : true, 'ano' : true, 'ba' : true, 'cajd' : true, 'calg' : true,
                    'caram' : true, 'cari' : true, 'carid' : true, 'carol' : true, 'cedli' : true,
                    'cen' : true, 'cia' : true, 'cira' : true, 'cle' : true, 'cn' : true, 'co' : true,
                    'cu' : true, 'dak' : true, 'diel' : true, 'dir' : true, 'duh' : true, 'elrih' : true,
                    'elris' : true, 'em' : true, 'enir' : true, 'ha' : true, 'j' : true, 'ki' : true,
                    'kusi' : true, '' : true, '' : true, 'l' : true, 'lag' : true, 'lar' : true, 'legn' : true,
                    'lei' : true, 'lek' : true, 'lel' : true, 'len' : true, 'les' : true, 'leu' : true,
                    'lev' : true, 'lez' : true, 'li' : true, 'lleh' : true, 'llek' : true, 'lra' : true,
                    'lrednaw' : true, 'luj' : true, 'mac' : true, 'mah' : true, 'mei' : true, 'meo' : true,
                    'mor' : true, 'mt' : true, 'muss' : true, 'muy' : true, 'muz' : true, 'nab' : true, 
                    'nai' : true, 'nari' : true, 'nas' : true, 'nat' : true, 'naul' : true, 'nav' : true,
                    'navi' : true, 'navli' : true, 'nay' : true, 'ne' : true, 'nec' : true, 'neg' : true,
                    'nel' : true, 'neru' : true, 'neso' : true, 'nev' : true, 'nez' : true, 'nic' : true, 
                    'nie' : true, 'nil' : true, 'nnej' : true, 'nom' : true, 'nu' : true, 'ral' : true, 'ram' : true,
                    'rev' : true, 'rh' : true, 'roa' : true, 'ruya' : true, 'sl' : true, 'sr' : true,
                    'sseg' : true, 'tap' : true, 'tor' : true, 'ts' : true, 'tter' : true, 'tteu' : true,
                    'ua' : true, 'vai' : true, 'vi' : true, 'z' : true, 'zaz' : true, 'zus': true 
                }
        },
        'j': {
            'default': false,
            'sufix': {  }
        },
        'k': {
            'default': false,
            'sufix': { 'an': true, 'l': true }
        },
        'l': {
            'default': false,
            'sufix': 
                { 
                    'am' : true, 'eb' : true, 'ebam' : true, 'ebar' : true, 'ebas' : true, 
                    'ebaz' : true, 'ehca' : true, 'eht' : true, 'em' : true, 'euq' : true, 'iag' : true, 
                    'inel' : true, 'lem' : true, 'o': true 
                }
        },
        'm': {
            'default': false,
            'sufix': { 'ailil' : true, 'air' : true, 'aiv' : true, 'arim' : true, 'ee' : true, 'eleu' : true, 'em' : true, 'er' : true }
        },
         'n': {
            'default': false,
            'sufix': 
            { 
                'ailil' : true, 'aillil' : true, 'airam' : true, 'airi' : true, 'airy' : true, 
                'aivi' : true, 'ale' : true, 'alir' : true, 'asu' : true, 'avin' : true, 'avira' : true, 
                'ayri' : true, 'azu' : true, 'eho' : true, 'ekc' : true, 'ele' : true, 'ell' : true, 
                'em' : true, 'era' : true, 'ets' : true, 'ielr' : true, 'ilek' : true, 'ilev' : true, 
                'ims' : true, 'ir' : true, 'itsi' : true, 'itsr' : true, 'na' : true, 'ny' : true, 
                'orah' : true, 'uk' : true, 'us' : true, 'y' : true 
            }
        },
         'o': {
            'default': false,
            'sufix': 
                { 
                    'acie' : true, 'ce' : true, 'cim' : true, 'cit' : true, 
                    'ico' : true, 'ka' : true, 'ke' : true, 'kiek' : true, 'kies' : true, 'kihc' : true,
                    'kihs' : true, 'kika' : true, 'kiku' : true, 'kim' : true, 'kir' : true, 'kit' : true, 
                    'ko' : true, 'kur' : true, 'kus' : true, 'kuy' : true, 'kuzi' : true, 'leu' : true, 
                    'nats' : true, 'niruam' : true, 'rro' : true, 'tej' : true, 'tnem' : true, 'ul': true 
                }
        },
        'p': {
            'default': false,
            'sufix': { 'iy' : true }
        },
        'q': {
            'default': false,
            'sufix': {  }
        },
        'r': {
            'default': false,
            'sufix': 
            { 
                'al' : true, 'amal' : true, 'amaz' : true, 'amicy' : true, 'amidi' : true, 'amidue' : true, 
                'amilo' : true, 'amisl' : true, 'amizl' : true, 'amsire' : true, 'anide' : true, 
                'effi' : true, 'efi' : true, 'ehta' : true, 'ehts' : true, 'epse' : true, 
                'etse' : true, 'iadam' : true, 'ialce' : true, 'ialo' : true, 'ian' : true, 'icalg' : true, 
                'idan' : true, 'idel' : true, 'inav' : true, 'inave' : true, 'inec' : true, 'inele' : true,
                'inez' : true, 'inoi' : true, 'oif' : true, 'onoe' : true, 'ycar': true 
            }
        },
         's': {
            'default':false,
            'sufix': 
            { 
                'adinu' : true, 'aitak' : true, 'ecr' : true, 'edec' : true, 'edio' : true, 'edlia' : true, 
                'edred' : true, 'edru' : true, 'eduel' : true, 'edui' : true, 'egri' : true, 'ekl' : true, 
                'eleg' : true, 'enele' : true, 'eng' : true, 'eni' : true, 'enia' : true, 'enid' : true, 
                'enir' : true, 'ep' : true, 'ered' : true, 'erim' : true, 'erima' : true, 'ero' : true, 
                'eryat' : true, 'eryma' : true, 'even' : true, 'iah' : true, 'ial' : true, 'iat' : true, 
                'ida' : true, 'ila' : true, 'ile' : true, 'ili' : true, 'ill' : true, 'ily' : true, 
                'inedl' : true, 'inna' : true, 'io' : true, 'ira' : true, 'irc' : true, 'iri' : true, 
                'irim' : true, 'iris' : true, 'irod' : true, 'iry' : true, 'isi' : true, 'itr' : true, 
                'iz' : true, 'orieh' : true, 'yd' : true, 'yni' : true, 'yr' : true 
            }
        },
        't': {
            'default': false,
            'sufix': { 'eb' : true, 'er' : true, 'ide' : true, 'ig' : true, 'se' : true, 'ten' : true, 'ti' : true }
        },
        'u': {
            'default': false,
            'sufix': { 'd' : true, 'la' : true, 'j' : true, 'rahim' : true, 's':true }
        },
        'v': {
            'default': false,
            'sufix': { 'il':true }
        },
        'w': {
            'default': false,
            'sufix': {  }
        },
        'x': {
            'default': false,
            'sufix': {  }
        },
        'y': {
            'default': false,
            'sufix': 
            { 
                'am' : true, 'ana' : true, 'anoi' : true, 'cal' : true, 'cara' : true, 'cari' : true, 
                'carod' : true, 'cav' : true, 'cira' : true, 'clao' : true, 'cn' : true, 'cren' : true, 
                'cu' : true, 'dal' : true, 'deh' : true, 'dni' : true, 'elrih' : true, 'enar' : true, 
                'g' : true, 'ha' : true, 'htor' : true, 'l' : true, 'lat' : true, 'lea' : true, 
                'lecu' : true, 'leg' : true, 'lek' : true, 'len' : true, 'les' : true, 
                'leu' : true, 'lev' : true, 'lez' : true, 'lia' : true, 'lim' : true, 
                'lir' : true, 'lle' : true, 'lram' : true, 'luj' : true, 'mac' : true, 
                'mat' : true, 'nai' : true, 'nari' : true, 'nas' : true, 'nau' : true, 
                'navl' : true, 'naw' : true, 'neg' : true, 'nej' : true, 'nel' : true, 
                'neu' : true, 'nna' : true, 'nom' : true, 'ram' : true, 'remi' : true, 
                'rems' : true, 'ri' : true, 'ror' : true, 'saj' : true, 'sej' : true, 
                'si' : true, 'so' : true, 'su' : true, 't': true 
            }
        },
        'z': {
            'default': false,
            'sufix': { 'eni' : true, 'enir' : true, 'ered' : true, 'il' : true, 'ir' : true, 'u':true }
        },
    };

var latin = 
    {'A':'a','a':'a', 'Á':'a', 'Ă':'a', 'Ắ':'a', 'Ặ':'a', 'Ằ':'a', 'Ẳ':'a', 'Ẵ':'a', 'Ǎ':'a', 'Â':'a', 'Ấ':'a', 'Ậ':'a', 'Ầ':'a', 'Ẩ':'a', 'Ẫ':'a', 'Ä':'a',
     'Ǟ':'a', 'Ȧ':'a', 'Ǡ':'a', 'Ạ':'a', 'Ȁ':'a', 'À':'a', 'Ả':'a', 'Ȃ':'a', 'Ā':'a', 'Ą':'a', 'Å':'a', 'Ǻ':'a', 'Ḁ':'a', 'Ⱥ':'a', 'Ã':'a', 'Ꜳ':'aa',
     'Æ':'ae', 'Ǽ':'ae', 'Ǣ':'ae', 'Ꜵ':'ao', 'Ꜷ':'au', 'Ꜹ':'av', 'Ꜻ':'av', 'Ꜽ':'ay','B':'b','b':'b', 'Ḃ':'b', 'Ḅ':'b', 'Ɓ':'b', 'Ḇ':'b', 'Ƀ':'b', 'Ƃ':'b',
     'C':'c', 'c':'c','Ć':'c', 'Č':'c', 'Ç':'c', 'Ḉ':'c', 'Ĉ':'c', 'Ċ':'c', 'Ƈ':'c', 'Ȼ':'c', 'D':'d', 'd':'d','Ď':'d', 'Ḑ':'d', 'Ḓ':'d', 'Ḋ':'d', 'Ḍ':'d', 'Ɗ':'d',
     'Ḏ':'d', 'ǲ':'d', 'ǅ':'d', 'Đ':'d', 'Ƌ':'d', 'Ǳ':'dz', 'Ǆ':'dz','E':'e','e':'e', 'É':'e', 'Ĕ':'e', 'Ě':'e', 'Ȩ':'e', 'Ḝ':'e', 'Ê':'e', 'Ế':'e', 'Ệ':'e',
     'Ề':'e', 'Ể':'e', 'Ễ':'e', 'Ḙ':'e', 'Ë':'e', 'Ė':'e', 'Ẹ':'e', 'Ȅ':'e', 'È':'e', 'Ẻ':'e', 'Ȇ':'e', 'Ē':'e', 'Ḗ':'e', 'Ḕ':'e', 'Ę':'e', 'Ɇ':'e',
     'Ẽ':'e', 'Ḛ':'e', 'Ꝫ':'ET','F':'f', 'f':'f', 'Ḟ':'f', 'Ƒ':'f', 'G':'g', 'g':'g', 'Ǵ':'g', 'Ğ':'g', 'Ǧ':'g', 'Ģ':'g', 'Ĝ':'g', 'Ġ':'g', 'Ɠ':'g', 'Ḡ':'g', 'Ǥ':'g',
     'H':'h', 'h':'h', 'Ḫ':'h', 'Ȟ':'h', 'Ḩ':'h', 'Ĥ':'h', 'Ⱨ':'h', 'Ḧ':'h', 'Ḣ':'h', 'Ḥ':'h', 'Ħ':'h','I':'i', 'i':'i', 'Í':'i', 'Ĭ':'i', 'Ǐ':'i', 'Î':'i', 'Ï':'i',
     'Ḯ':'i', 'İ':'i', 'Ị':'i', 'Ȉ':'i', 'Ì':'i', 'Ỉ':'i', 'Ȋ':'i', 'Ī':'i', 'Į':'i', 'Ɨ':'i', 'Ĩ':'i', 'Ḭ':'i', 'Ꝺ':'D', 'Ꝼ':'f', 'Ᵹ':'g',
     'Ꞃ':'r', 'Ꞅ':'s', 'Ꞇ':'t', 'Ꝭ':'is', 'J':'j', 'j':'j', 'Ĵ':'j', 'Ɉ':'j','K':'k', 'k':'k', 'Ḱ':'k', 'Ǩ':'k', 'Ķ':'k', 'Ⱪ':'k', 'Ꝃ':'k', 'Ḳ':'k', 'Ƙ':'k', 'Ḵ':'k', 
     'Ꝁ':'k', 'Ꝅ':'k', 'L':'l', 'l':'l', 'Ĺ':'l', 'Ƚ':'l', 'Ľ':'l', 'Ļ':'l', 'Ḽ':'l', 'Ḷ':'l', 'Ḹ':'l', 'Ⱡ':'l', 'Ꝉ':'l', 'Ḻ':'l', 'Ŀ':'l', 'Ɫ':'l', 'ǈ':'l',
     'Ł':'l', 'Ǉ':'lj', 'M':'m', 'm':'m', 'Ḿ':'m', 'Ṁ':'m', 'Ṃ':'m', 'Ɱ':'m', 'N':'n', 'n':'n', 'Ń':'n', 'Ň':'n', 'Ņ':'n', 'Ṋ':'n', 'Ṅ':'n', 'Ṇ':'n', 'Ǹ':'n', 'Ɲ':'n',
     'Ṉ':'n', 'Ƞ':'n', 'ǋ':'n', 'Ñ':'n', 'Ǌ':'nj', 'O':'o', 'o':'o', 'Ó':'o', 'Ŏ':'o', 'Ǒ':'o', 'Ô':'o', 'Ố':'o', 'Ộ':'o', 'Ồ':'o', 'Ổ':'o', 'Ỗ':'o', 'Ö':'o',
     'Ȫ':'o', 'Ȯ':'o', 'Ȱ':'o', 'Ọ':'o', 'Ő':'o', 'Ȍ':'o', 'Ò':'o', 'Ỏ':'o', 'Ơ':'o', 'Ớ':'o', 'Ợ':'o', 'Ờ':'o', 'Ở':'o', 'Ỡ':'o', 'Ȏ':'o', 'Ꝋ':'o', 
     'Ꝍ':'o', 'Ō':'o', 'Ṓ':'o', 'Ṑ':'o', 'Ɵ':'o', 'Ǫ':'o', 'Ǭ':'o', 'Ø':'o', 'Ǿ':'o', 'Õ':'o', 'Ṍ':'o', 'Ṏ':'o', 'Ȭ':'o', 'Ƣ':'oi', 'Ꝏ':'oo', 
     'Ɛ':'e', 'Ɔ':'o', 'Ȣ':'ou', 'P':'p', 'p':'p', 'Ṕ':'p', 'Ṗ':'p', 'Ꝓ':'p', 'Ƥ':'p', 'Ꝕ':'p', 'Ᵽ':'p', 'Ꝑ':'p', 'q':'q','Q':'q','Ꝙ':'q', 'Ꝗ':'q', 'R':'r', 'r':'r', 'Ŕ':'r', 
     'Ř':'r', 'Ŗ':'r', 'Ṙ':'r', 'Ṛ':'r', 'Ṝ':'r', 'Ȑ':'r', 'Ȓ':'r', 'Ṟ':'r', 'Ɍ':'r', 'Ɽ':'r', 'Ꜿ':'c', 'Ǝ':'e', 'S':'s','s':'s','Ś':'s', 'Ṥ':'s', 'Š':'s',
     'Ṧ':'s', 'Ş':'s', 'Ŝ':'s', 'Ș':'s', 'Ṡ':'s', 'Ṣ':'s', 'Ṩ':'s', 'T':'t','t':'t', 'Ť':'t', 'Ţ':'t', 'Ṱ':'t', 'Ț':'t', 'Ⱦ':'t', 'Ṫ':'t', 'Ṭ':'t', 'Ƭ':'t',
     'Ṯ':'t', 'Ʈ':'t', 'Ŧ':'t', 'Ɐ':'a', 'Ꞁ':'l', 'Ɯ':'m', 'Ʌ':'v', 'Ꜩ':'tz', 'U':'u', 'u':'u', 'Ú':'u', 'Ŭ':'u', 'Ǔ':'u', 'Û':'u', 'Ṷ':'u', 'Ü':'u', 'Ǘ':'u',
     'Ǚ':'u', 'Ǜ':'u', 'Ǖ':'u', 'Ṳ':'u', 'Ụ':'u', 'Ű':'u', 'Ȕ':'u', 'Ù':'u', 'Ủ':'u', 'Ư':'u', 'Ứ':'u', 'Ự':'u', 'Ừ':'u', 'Ử':'u', 'Ữ':'u', 'Ȗ':'u',
      'Ū':'u', 'Ṻ':'u', 'Ų':'u', 'Ů':'u', 'Ũ':'u', 'Ṹ':'u', 'Ṵ':'u', 'Ꝟ':'v', 'V':'v', 'v':'v', 'Ṿ':'v', 'Ʋ':'v', 'Ṽ':'v', 'Ꝡ':'vy', 'Ẃ':'w', 'W':'w', 'w':'w', 'Ŵ':'w', 
      'Ẅ':'w', 'Ẇ':'w', 'Ẉ':'w', 'Ẁ':'w', 'Ⱳ':'w', 'X':'x','Ẍ':'x', 'Ẋ':'x', 'Y':'y', 'y':'y', 'Ý':'y', 'Ŷ':'y', 'Ÿ':'y', 'Ẏ':'y', 'Ỵ':'y', 'Ỳ':'y', 'Ƴ':'y', 'Ỷ':'y', 
      'Ỿ':'y', 'Ȳ':'y', 'Ɏ':'y', 'Ỹ':'y', 'Z':'z', 'z':'z', 'Ź':'z', 'Ž':'z', 'Ẑ':'z', 'Ⱬ':'z', 'Ż':'z', 'Ẓ':'z', 'Ȥ':'z', 'Ẕ':'z', 'Ƶ':'z', 'Ĳ':'ij', 'Œ':'oe',
      'ᴀ':'a', 'ᴁ':'ae', 'ʙ':'b', 'ᴃ':'b', 'ᴄ':'c', 'ᴅ':'d', 'ᴇ':'e', 'ꜰ':'f', 'ɢ':'g', 'ʛ':'g', 'ʜ':'h', 'ɪ':'i', 'ʁ':'r', 'ᴊ':'j', 'ᴋ':'k', 'ʟ':'l',
      'ᴌ':'l', 'ᴍ':'m', 'ɴ':'n', 'ᴏ':'o', 'ɶ':'oe', 'ᴐ':'o', 'ᴕ':'ou', 'ᴘ':'p', 'ʀ':'r', 'ᴎ':'n', 'ᴙ':'r', 'ꜱ':'s', 'ᴛ':'t', 'ⱻ':'e', 'ᴚ':'r', 'ᴜ':'u',
      'ᴠ':'v', 'ᴡ':'w', 'ʏ':'y', 'ᴢ':'z', 'á':'a', 'ă':'a', 'ắ':'a', 'ặ':'a', 'ằ':'a', 'ẳ':'a', 'ẵ':'a', 'ǎ':'a', 'â':'a', 'ấ':'a', 'ậ':'a', 'ầ':'a',
      'ẩ':'a', 'ẫ':'a', 'ä':'a', 'ǟ':'a', 'ȧ':'a', 'ǡ':'a', 'ạ':'a', 'ȁ':'a', 'à':'a', 'ả':'a', 'ȃ':'a', 'ā':'a', 'ą':'a', 'ᶏ':'a', 'ẚ':'a', 'å':'a', 
      'ǻ':'a', 'ḁ':'a', 'ⱥ':'a', 'ã':'a', 'ꜳ':'aa', 'æ':'ae', 'ǽ':'ae', 'ǣ':'ae', 'ꜵ':'ao', 'ꜷ':'au', 'ꜹ':'av', 'ꜻ':'av', 'ꜽ':'ay', 'ḃ':'b', 'ḅ':'b',
      'ɓ':'b', 'ḇ':'b', 'ᵬ':'b', 'ᶀ':'b', 'ƀ':'b', 'ƃ':'b', 'ɵ':'o', 'ć':'c', 'č':'c', 'ç':'c', 'ḉ':'c', 'ĉ':'c', 'ɕ':'c', 'ċ':'c', 'ƈ':'c', 'ȼ':'c',
      'ď':'d', 'ḑ':'d', 'ḓ':'d', 'ȡ':'d', 'ḋ':'d', 'ḍ':'d', 'ɗ':'d', 'ᶑ':'d', 'ḏ':'d', 'ᵭ':'d', 'ᶁ':'d', 'đ':'d', 'ɖ':'d', 'ƌ':'d', 'ı':'i', 'ȷ':'j',
      'ɟ':'j', 'ʄ':'j', 'ǳ':'dz', 'ǆ':'dz', 'é':'e', 'ĕ':'e', 'ě':'e', 'ȩ':'e', 'ḝ':'e', 'ê':'e', 'ế':'e', 'ệ':'e', 'ề':'e', 'ể':'e', 'ễ':'e', 'ḙ':'e',
      'ë':'e', 'ė':'e', 'ẹ':'e', 'ȅ':'e', 'è':'e', 'ẻ':'e', 'ȇ':'e', 'ē':'e', 'ḗ':'e', 'ḕ':'e', 'ⱸ':'e', 'ę':'e', 'ᶒ':'e', 'ɇ':'e', 'ẽ':'e', 'ḛ':'e',
      'ꝫ':'et', 'ḟ':'f', 'ƒ':'f', 'ᵮ':'f', 'ᶂ':'f', 'ǵ':'g', 'ğ':'g', 'ǧ':'g', 'ģ':'g', 'ĝ':'g', 'ġ':'g', 'ɠ':'g', 'ḡ':'g', 'ᶃ':'g', 'ǥ':'g', 'ḫ':'h',
      'ȟ':'h', 'ḩ':'h', 'ĥ':'h', 'ⱨ':'h', 'ḧ':'h', 'ḣ':'h', 'ḥ':'h', 'ɦ':'h', 'ẖ':'h', 'ħ':'h', 'ƕ':'hv', 'í':'i', 'ĭ':'i', 'ǐ':'i', 'î':'i', 'ï':'i',
      'ḯ':'i', 'ị':'i', 'ȉ':'i', 'ì':'i', 'ỉ':'i', 'ȋ':'i', 'ī':'i', 'į':'i', 'ᶖ':'i', 'ɨ':'i', 'ĩ':'i', 'ḭ':'i', 'ꝺ':'d', 'ꝼ':'f', 'ᵹ':'g', 'ꞃ':'r',
      'ꞅ':'s', 'ꞇ':'t', 'ꝭ':'is', 'ǰ':'j', 'ĵ':'j', 'ʝ':'j', 'ɉ':'j', 'ḱ':'k', 'ǩ':'k', 'ķ':'k', 'ⱪ':'k', 'ꝃ':'k', 'ḳ':'k', 'ƙ':'k', 'ḵ':'k', 'ᶄ':'k',
      'ꝁ':'k', 'ꝅ':'k', 'ĺ':'l', 'ƚ':'l', 'ɬ':'l', 'ľ':'l', 'ļ':'l', 'ḽ':'l', 'ȴ':'l', 'ḷ':'l', 'ḹ':'l', 'ⱡ':'l', 'ꝉ':'l', 'ḻ':'l', 'ŀ':'l', 'ɫ':'l',
      'ᶅ':'l', 'ɭ':'l', 'ł':'l', 'ǉ':'lj', 'ſ':'s', 'ẜ':'s', 'ẛ':'s', 'ẝ':'s', 'ḿ':'m', 'ṁ':'m', 'ṃ':'m', 'ɱ':'m', 'ᵯ':'m', 'ᶆ':'m', 'ń':'n', 'ň':'n',
      'ņ':'n', 'ṋ':'n', 'ȵ':'n', 'ṅ':'n', 'ṇ':'n', 'ǹ':'n', 'ɲ':'n', 'ṉ':'n', 'ƞ':'n', 'ᵰ':'n', 'ᶇ':'n', 'ɳ':'n', 'ñ':'n', 'ǌ':'nj', 'ó':'o', 'ŏ':'o',
      'ǒ':'o', 'ô':'o', 'ố':'o', 'ộ':'o', 'ồ':'o', 'ổ':'o', 'ỗ':'o', 'ö':'o', 'ȫ':'o', 'ȯ':'o', 'ȱ':'o', 'ọ':'o', 'ő':'o', 'ȍ':'o', 'ò':'o', 'ỏ':'o',
      'ơ':'o', 'ớ':'o', 'ợ':'o', 'ờ':'o', 'ở':'o', 'ỡ':'o', 'ȏ':'o', 'ꝋ':'o', 'ꝍ':'o', 'ⱺ':'o', 'ō':'o', 'ṓ':'o', 'ṑ':'o', 'ǫ':'o', 'ǭ':'o', 'ø':'o',
      'ǿ':'o', 'õ':'o', 'ṍ':'o', 'ṏ':'o', 'ȭ':'o', 'ƣ':'oi', 'ꝏ':'oo', 'ɛ':'e', 'ᶓ':'e', 'ɔ':'o', 'ᶗ':'o', 'ȣ':'ou', 'ṕ':'p', 'ṗ':'p', 'ꝓ':'p', 'ƥ':'p',
      'ᵱ':'p', 'ᶈ':'p', 'ꝕ':'p', 'ᵽ':'p', 'ꝑ':'p', 'ꝙ':'q', 'ʠ':'q', 'ɋ':'q', 'ꝗ':'q', 'ŕ':'r', 'ř':'r', 'ŗ':'r', 'ṙ':'r', 'ṛ':'r', 'ṝ':'r', 'ȑ':'r',
      'ɾ':'r', 'ᵳ':'r', 'ȓ':'r', 'ṟ':'r', 'ɼ':'r', 'ᵲ':'r', 'ᶉ':'r', 'ɍ':'r', 'ɽ':'r', 'ↄ':'c', 'ꜿ':'c', 'ɘ':'e', 'ɿ':'r', 'ś':'s', 'ṥ':'s', 'š':'s',
      'ṧ':'s', 'ş':'s', 'ŝ':'s', 'ș':'s', 'ṡ':'s', 'ṣ':'s', 'ṩ':'s', 'ʂ':'s', 'ᵴ':'s', 'ᶊ':'s', 'ȿ':'s', 'ɡ':'g', 'ᴑ':'o', 'ᴓ':'o', 'ᴝ':'u', 'ť':'t',
      'ţ':'t', 'ṱ':'t', 'ț':'t', 'ȶ':'t', 'ẗ':'t', 'ⱦ':'t', 'ṫ':'t', 'ṭ':'t', 'ƭ':'t', 'ṯ':'t', 'ᵵ':'t', 'ƫ':'t', 'ʈ':'t', 'ŧ':'t', 'ᵺ':'th', 'ɐ':'a',
      'ᴂ':'ae', 'ǝ':'e', 'ᵷ':'g', 'ɥ':'h', 'ʮ':'h', 'ʯ':'h', 'ᴉ':'i', 'ʞ':'k', 'ꞁ':'l', 'ɯ':'m', 'ɰ':'m', 'ᴔ':'oe', 'ɹ':'r', 'ɻ':'r', 'ɺ':'r', 'ⱹ':'r',
      'ʇ':'t', 'ʌ':'v', 'ʍ':'w', 'ʎ':'y', 'ꜩ':'tz', 'ú':'u', 'ŭ':'u', 'ǔ':'u', 'û':'u', 'ṷ':'u', 'ü':'u', 'ǘ':'u', 'ǚ':'u', 'ǜ':'u', 'ǖ':'u', 'ṳ':'u',
      'ụ':'u', 'ű':'u', 'ȕ':'u', 'ù':'u', 'ủ':'u', 'ư':'u', 'ứ':'u', 'ự':'u', 'ừ':'u', 'ử':'u', 'ữ':'u', 'ȗ':'u', 'ū':'u', 'ṻ':'u', 'ų':'u', 'ᶙ':'u',
      'ů':'u', 'ũ':'u', 'ṹ':'u', 'ṵ':'u', 'ᵫ':'ue', 'ꝸ':'um', 'ⱴ':'v', 'ꝟ':'v', 'ṿ':'v', 'ʋ':'v', 'ᶌ':'v', 'ⱱ':'v', 'ṽ':'v', 'ꝡ':'vy', 'ẃ':'w', 'ŵ':'w',
      'ẅ':'w', 'ẇ':'w', 'ẉ':'w', 'ẁ':'w', 'ⱳ':'w', 'ẘ':'w', 'ẍ':'x', 'ẋ':'x', 'ᶍ':'x', 'ý':'y', 'ŷ':'y', 'ÿ':'y', 'ẏ':'y', 'ỵ':'y', 'ỳ':'y', 'ƴ':'y',
      'ỷ':'y', 'ỿ':'y', 'ȳ':'y', 'ẙ':'y', 'ɏ':'y', 'ỹ':'y', 'ź':'z', 'ž':'z', 'ẑ':'z', 'ʑ':'z', 'ⱬ':'z', 'ż':'z', 'ẓ':'z', 'ȥ':'z', 'ẕ':'z', 'ᵶ':'z',
      'ᶎ':'z', 'ʐ':'z', 'ƶ':'z', 'ɀ':'z', 'ﬀ':'ff', 'ﬃ':'ffi', 'ﬄ':'ffl', 'ﬁ':'fi', 'ﬂ':'fl', 'ĳ':'ij', 'œ':'oe', 'ﬆ':'st', 'ₐ':'a', 'ₑ':'e', 'ᵢ':'i',
      'ⱼ':'j', 'ₒ':'o', 'ᵣ':'r', 'ᵤ':'u', 'ᵥ':'v', 'ₓ':'x'
    };

// Este método removera caracteries duplicados: 'Jooão' -> 'João'
// Removera acentos                             : 'João' -> 'Joao'
// Passara passa caixa baixa                    : 'joao' -> 'joao'
// Removerá ultima letra                        : 'joao' -> 'joa'
// Inverterá a string                           : 'joa' -> 'aoj'
//
// 
var prepareAndReverseString = function(str)
{
    var result = '';

    if (str.length < 1)
        return '';

    var last = '\0';
    var i = str.length - 1;

    while (i--) {
        var ch = str [i];
        if (ch == last)
            continue;

        var chLatin = latin[ch];
        if (!chLatin)
            continue;

        last = chLatin;
        result += last;
    }

    return result;
}

var simplifyString = function(str)
{
    var result = '';

    if (str.length < 1)
        return '';

    var length = str.length;
    var i = 0;

    while (i < length) {
        var ch = str [i];
        i++;

        var chLatin = latin[ch];
        if (!chLatin) {
            continue;
        }
        result += chLatin;
    }

    return result;
}

var containsSufix = function (sufixes, sufix)
{
    if (!sufix || !sufixes)
        return false;
    if (sufix.length == 0 || Object.keys(sufixes).length === 0)
        return false;

    while (sufix.length > 0) {
        if (sufixes [sufix])
            return true;
        sufix = sufix.substr (0, sufix.length - 1);
    }

    return false;
}

var containsPart = function (parts, name)
{
    if (!parts || !name)
        return false;

    if (name.length == 0 || parts.length === 0)
        return false;

    for (var i = 0; i < parts.length; i++) {
        var part = parts [i];
        if (name.indexOf(part)  != -1)
            return true;
    }
    return false;
}

var ehFeminino = function(nome) {

    if (nome.length < 1)
        return false;
    
    var last = latin[nome[nome.length - 1]];
    if (!last)
        return false;
    var entry = dict [last];
    if (!entry)
        return false;

    var sufix = prepareAndReverseString (nome);

    if (containsSufix (entry.sufix, sufix))
        return !entry.default;
    return !!entry.default;
}

var nippo_exceptions =
            [ 
                'liu',
            ]

var nippo_sufixes =
            [ 
                'abe',
                'ada',
                'agara',
                'agi',
                'aka',
                'aki',
                'ama',
                'anai',
                'andou',
                'aoki',
                'ashi',
                'ato',
                'atsuo',
                'awa',
                'bata',
                'coma',
                'cuma',
                'eda',
                'eii',
                'eki',
                'eko',
                'enji',
                'eno',
                'fuku',
                'guchi',
                'guci',
                'guti',
                'hara',
                'haru',
                'hida',
                'hinji',
                'hiro',
                'hoka',
                'honda',
                'hori',
                'iba',
                'ichi',
                'iida',
                'iemi',
                'ika',
                'ima',
                'irai',
                'ishi',
                'itou',
                'iwa',
                'jita',
                'kai',
                'kama',
                'kami',
                'kano',
                'kata',
                'koma',
                'koga',
                'kuda',
                'kuma',
                'kunio',
                'kuno',
                'mada',
                'matsu',
                'miso',
                'mizu',
                'moto',
                'mori',
                'mura',
                'nag',
                'nai',
                'nak',
                'nami',
                'nari',
                'noue',
                'oda',
                'oike',
                'oka',
                'oku',
                'ondo',
                'ono',
                'oshi',
                'ota',
                'rano',
                'rata',
                'rita',
                'saka',
                'saki',
                'sano',
                'sayu',
                'sets',
                'shita',
                'shiro',
                'suki',
                'suko',
                'suda',
                'tane',
                'tani',
                'tama',
                'tami',
                'tou',
                'todi',
                'tori',
                'tsui',
                'ubo',
                'uchi',
                'uci',
                'udo',
                'ueta',
                'uka',
                'uki',
                'umai',
                'urai',
                'wada',
                'wara',
                'wata',
                'yake',
                'yama',
                'yano',
                'yashi',
                'yoko',
                'yona',
                'yuki',
                'yume',
                'yumi',
                'zaki',
                'zuki',
                'zuno'
            ]

var forbidden_nippo_parts = [
                'l',
                'era',
                'eira',
                'ero',
                'eiro',
];

var forbidden_nippo_firstletter = [
                'b',
                'l',
                'p',
                'q',
                'v',
                'x',
];

var ehNippo = function(name) {

    if (name.length < 1)
        return false;

    if (nippo_exceptions.indexOf (name) != -1)
        return true;

    if (containsPart (forbidden_nippo_parts, name))
        return false;

    if (forbidden_nippo_firstletter.indexOf (name[0]) != -1)
        return false;

    var converter = jp_converter;
    result = converter.convert (name)
    if (!result)
        return false;

    if (containsPart(nippo_sufixes, name))
        return true;
    return false;
}

var ehKorean = function(name) {

    var common_korean = [
                'eun',
                'kim',
                'lim',
    ];

    return common_korean.indexOf (name) != -1;
}

var ehChinese = function(name) {

    var common_chinese = [
                'lee',
                'liau',
                'liu',
                'lye',
                'may',
                'yunja',
                'wong',
                'wu',
    ];

    return common_chinese.indexOf (name) != -1;
}

var ehAsianNames = function (names) {
    if (!names || names.length == 0)
        return false;

    for (var i = 0; i < names.length; i++) {

        var last_name = simplifyString (names[i]);

        if (ehNippo (last_name))
            return true;
        if (ehKorean (last_name))
            return true;
        if (ehChinese (last_name))
            return true;
    }

    return false;
}

var getNameInfo = function(name) {

    if (!name)
        return null;
    
    var info = {};
    name = name.trim();
    var names = name.split (' ');
    var first_name = names.splice (0, 1)[0];

    if (ehFeminino(first_name))
        info ['gender'] = 'female';
    else
        info ['gender'] = 'male';

    if (ehAsianNames (names))
        info ['ethnics'] = 'asian';
    else
        info ['ethnics'] = 'unknown';
    
    return info;
}

 window['getNameInfo'] = getNameInfo;
})();

