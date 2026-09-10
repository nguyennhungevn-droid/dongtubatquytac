import { IrregularVerb } from '../types';

export const RAW_VERBS: Omit<IrregularVerb, 'id' | 'day'>[] = [
  // Day 1 - As explicitly requested by the user:
  // "Từ thứ 1 ; show từ số 1 của ngày đầu tiên: V1: GET, V2: GOT, V3: GOT, NGHĨA – PHÁT ÂM"
  {
    v1: 'get',
    v2: 'got',
    v3: 'got',
    v3_alt: ['gotten'],
    meaning: 'có được, nhận được, lấy được',
    ipa: '/ɡet/ - /ɡɒt/ - /ɡɒt/'
  },
  {
    v1: 'be',
    v2: 'was/were',
    v3: 'been',
    meaning: 'là, thì, ở, bị',
    ipa: '/biː/ - /wɒz, wɜːr/ - /biːn/'
  },
  {
    v1: 'go',
    v2: 'went',
    v3: 'gone',
    meaning: 'đi, di chuyển',
    ipa: '/ɡoʊ/ - /went/ - /ɡɒn/'
  },
  {
    v1: 'do',
    v2: 'did',
    v3: 'done',
    meaning: 'làm, hành động',
    ipa: '/duː/ - /dɪd/ - /dʌn/'
  },
  {
    v1: 'have',
    v2: 'had',
    v3: 'had',
    meaning: 'có, ăn cái gì',
    ipa: '/hæv/ - /hæd/ - /hæd/'
  },

  // Day 2 (From PDF: abide, arise, awake, backslide, bear)
  {
    v1: 'abide',
    v2: 'abode',
    v3: 'abode',
    v2_alt: ['abided'],
    v3_alt: ['abided'],
    meaning: 'lưu trú tại đâu, tuân theo',
    ipa: '/əˈbaɪd/ - /əˈboʊd/ - /əˈboʊd/'
  },
  {
    v1: 'arise',
    v2: 'arose',
    v3: 'arisen',
    meaning: 'phát sinh, xuất hiện',
    ipa: '/əˈraɪz/ - /əˈroʊz/ - /əˈrɪzn/'
  },
  {
    v1: 'awake',
    v2: 'awoke',
    v3: 'awoken',
    meaning: 'thức dậy, đánh thức ai',
    ipa: '/əˈweɪk/ - /əˈwoʊk/ - /əˈwoʊkən/'
  },
  {
    v1: 'backslide',
    v2: 'backslid',
    v3: 'backslid',
    v3_alt: ['backslidden'],
    meaning: 'tái phạm, sa ngã trở lại',
    ipa: '/ˈbæk.slaɪd/ - /ˈbæk.slɪd/ - /ˈbæk.slɪd/'
  },
  {
    v1: 'bear',
    v2: 'bore',
    v3: 'born',
    v3_alt: ['borne'],
    meaning: 'chịu đựng, mang cái gì, sinh con',
    ipa: '/beər/ - /bɔːr/ - /bɔːn/'
  },

  // Day 3 (beat, become, befall, begin, behold)
  {
    v1: 'beat',
    v2: 'beat',
    v3: 'beat',
    v3_alt: ['beaten'],
    meaning: 'đập, đánh, đánh bại',
    ipa: '/biːt/ - /biːt/ - /ˈbiːtn/'
  },
  {
    v1: 'become',
    v2: 'became',
    v3: 'become',
    meaning: 'trở thành, trở nên',
    ipa: '/bɪˈkʌm/ - /bɪˈkeɪm/ - /bɪˈkʌm/'
  },
  {
    v1: 'befall',
    v2: 'befell',
    v3: 'befallen',
    meaning: '(cái gì) xảy đến, xảy ra',
    ipa: '/bɪˈfɔːl/ - /bɪˈfel/ - /bɪˈfɔːlən/'
  },
  {
    v1: 'begin',
    v2: 'began',
    v3: 'begun',
    meaning: 'bắt đầu, khởi đầu',
    ipa: '/bɪˈɡɪn/ - /bɪˈɡæn/ - /bɪˈɡʌn/'
  },
  {
    v1: 'behold',
    v2: 'beheld',
    v3: 'beheld',
    meaning: 'nhìn ngắm, chiêm ngưỡng',
    ipa: '/bɪˈhoʊld/ - /bɪˈheld/ - /bɪˈheld/'
  },

  // Day 4 (bend, beset, bespeak, bet, bid)
  {
    v1: 'bend',
    v2: 'bent',
    v3: 'bent',
    meaning: 'bẻ cong, uốn cong',
    ipa: '/bend/ - /bent/ - /bent/'
  },
  {
    v1: 'beset',
    v2: 'beset',
    v3: 'beset',
    meaning: 'ảnh hưởng, tác động xấu, bao vây',
    ipa: '/bɪˈset/ - /bɪˈset/ - /bɪˈset/'
  },
  {
    v1: 'bespeak',
    v2: 'bespoke',
    v3: 'bespoken',
    meaning: 'thể hiện, cho thấy điều gì',
    ipa: '/bɪˈspiːk/ - /bɪˈspoʊk/ - /bɪˈspoʊkən/'
  },
  {
    v1: 'bet',
    v2: 'bet',
    v3: 'bet',
    meaning: 'cá cược, đánh cược',
    ipa: '/bet/ - /bet/ - /bet/'
  },
  {
    v1: 'bid',
    v2: 'bid',
    v3: 'bid',
    meaning: 'ra giá, đề xuất giá, trả giá',
    ipa: '/bɪd/ - /bɪd/ - /bɪd/'
  },

  // Day 5 (bind, bite, bleed, blow, break)
  {
    v1: 'bind',
    v2: 'bound',
    v3: 'bound',
    meaning: 'trói, buộc, ràng buộc',
    ipa: '/baɪnd/ - /baʊnd/ - /baʊnd/'
  },
  {
    v1: 'bite',
    v2: 'bit',
    v3: 'bitten',
    meaning: 'cắn, ngoạm',
    ipa: '/baɪt/ - /bɪt/ - /ˈbɪtn/'
  },
  {
    v1: 'bleed',
    v2: 'bled',
    v3: 'bled',
    meaning: 'chảy máu',
    ipa: '/bliːd/ - /bled/ - /bled/'
  },
  {
    v1: 'blow',
    v2: 'blew',
    v3: 'blown',
    meaning: 'thổi, cuộn bay',
    ipa: '/bloʊ/ - /bluː/ - /bloʊn/'
  },
  {
    v1: 'break',
    v2: 'broke',
    v3: 'broken',
    meaning: 'làm vỡ, làm bể, gãy',
    ipa: '/breɪk/ - /broʊk/ - /ˈbroʊkən/'
  },

  // Day 6 (breed, bring, broadcast, browbeat, build)
  {
    v1: 'breed',
    v2: 'bred',
    v3: 'bred',
    meaning: 'giao phối và sinh con, nhân giống, nuôi dưỡng',
    ipa: '/briːd/ - /bred/ - /bred/'
  },
  {
    v1: 'bring',
    v2: 'brought',
    v3: 'brought',
    meaning: 'mang tới, đem lại',
    ipa: '/brɪŋ/ - /brɔːt/ - /brɔːt/'
  },
  {
    v1: 'broadcast',
    v2: 'broadcast',
    v3: 'broadcast',
    meaning: 'chiếu, phát chương trình',
    ipa: '/ˈbrɔːdkæst/ - /ˈbrɔːdkæst/ - /ˈbrɔːdkæst/'
  },
  {
    v1: 'browbeat',
    v2: 'browbeat',
    v3: 'browbeat',
    v3_alt: ['browbeaten'],
    meaning: 'đe dọa, hăm dọa ai để họ làm gì',
    ipa: '/ˈbraʊbiːt/ - /ˈbraʊbiːt/ - /ˈbraʊbiːtn/'
  },
  {
    v1: 'build',
    v2: 'built',
    v3: 'built',
    meaning: 'xây dựng, dựng lên',
    ipa: '/bɪld/ - /bɪlt/ - /bɪlt/'
  },

  // Day 7 (burn, burst, bust, buy, cast)
  {
    v1: 'burn',
    v2: 'burnt',
    v3: 'burnt',
    v2_alt: ['burned'],
    v3_alt: ['burned'],
    meaning: 'đốt, làm cháy',
    ipa: '/bɜːrn/ - /bɜːrnt/ - /bɜːrnt/'
  },
  {
    v1: 'burst',
    v2: 'burst',
    v3: 'burst',
    meaning: 'nổ tung, vỡ òa (khóc)',
    ipa: '/bɜːrst/ - /bɜːrst/ - /bɜːrst/'
  },
  {
    v1: 'bust',
    v2: 'bust',
    v3: 'bust',
    v2_alt: ['busted'],
    v3_alt: ['busted'],
    meaning: 'làm vỡ, làm bể, bắt quả tang',
    ipa: '/bʌst/ - /bʌst/ - /bʌst/'
  },
  {
    v1: 'buy',
    v2: 'bought',
    v3: 'bought',
    meaning: 'mua, sắm',
    ipa: '/baɪ/ - /bɔːt/ - /bɔːt/'
  },
  {
    v1: 'cast',
    v2: 'cast',
    v3: 'cast',
    meaning: 'tung, ném, đúc khuôn',
    ipa: '/kæst/ - /kæst/ - /kæst/'
  },

  // Day 8 (catch, chide, choose, cleave, cling)
  {
    v1: 'catch',
    v2: 'caught',
    v3: 'caught',
    meaning: 'bắt, chụp lấy',
    ipa: '/kætʃ/ - /kɔːt/ - /kɔːt/'
  },
  {
    v1: 'chide',
    v2: 'chid',
    v3: 'chid',
    v2_alt: ['chided'],
    v3_alt: ['chidden', 'chided'],
    meaning: 'mắng, chửi, quở trách',
    ipa: '/tʃaɪd/ - /tʃɪd/ - /ˈtʃɪdn/'
  },
  {
    v1: 'choose',
    v2: 'chose',
    v3: 'chosen',
    meaning: 'chọn, lựa chọn',
    ipa: '/tʃuːz/ - /tʃoʊz/ - /ˈtʃoʊzn/'
  },
  {
    v1: 'cleave',
    v2: 'cleft',
    v3: 'cleft',
    v2_alt: ['clove', 'cleaved'],
    v3_alt: ['cloven', 'cleaved'],
    meaning: 'chẻ, tách hai',
    ipa: '/kliːv/ - /kleft/ - /kleft/'
  },
  {
    v1: 'cling',
    v2: 'clung',
    v3: 'clung',
    meaning: 'dính chặt, bám vào',
    ipa: '/klɪŋ/ - /klʌŋ/ - /klʌŋ/'
  },

  // Day 9 (clothe, come, cost, creep, crossbreed)
  {
    v1: 'clothe',
    v2: 'clothed',
    v3: 'clothed',
    v2_alt: ['clad'],
    v3_alt: ['clad'],
    meaning: 'che phủ, mặc quần áo cho',
    ipa: '/kloʊð/ - /kloʊðd/ - /kloʊðd/'
  },
  {
    v1: 'come',
    v2: 'came',
    v3: 'come',
    meaning: 'tới, đến, đi đến',
    ipa: '/kʌm/ - /keɪm/ - /kʌm/'
  },
  {
    v1: 'cost',
    v2: 'cost',
    v3: 'cost',
    meaning: 'có giá là bao nhiêu, trị giá',
    ipa: '/kɒst/ - /kɒst/ - /kɒst/'
  },
  {
    v1: 'creep',
    v2: 'crept',
    v3: 'crept',
    meaning: 'di chuyển một cách lén lút, bò trườn',
    ipa: '/kriːp/ - /krept/ - /krept/'
  },
  {
    v1: 'crossbreed',
    v2: 'crossbred',
    v3: 'crossbred',
    meaning: 'cho lai giống',
    ipa: '/ˈkrɒs.briːd/ - /ˈkrɒs.bred/ - /ˈkrɒs.bred/'
  },

  // Day 10 (crow, cut, daydream, deal, dig)
  {
    v1: 'crow',
    v2: 'crew',
    v3: 'crowed',
    v2_alt: ['crowed'],
    meaning: 'gáy (gà), hò reo đắc thắng',
    ipa: '/kroʊ/ - /kruː/ - /kroʊd/'
  },
  {
    v1: 'cut',
    v2: 'cut',
    v3: 'cut',
    meaning: 'cắt, xén',
    ipa: '/kʌt/ - /kʌt/ - /kʌt/'
  },
  {
    v1: 'daydream',
    v2: 'daydreamt',
    v3: 'daydreamt',
    v2_alt: ['daydreamed'],
    v3_alt: ['daydreamed'],
    meaning: 'suy nghĩ vẩn vơ, mơ mộng viển vông',
    ipa: '/ˈdeɪ.driːm/ - /ˈdeɪ.dremt/ - /ˈdeɪ.dremt/'
  },
  {
    v1: 'deal',
    v2: 'dealt',
    v3: 'dealt',
    meaning: 'chia bài, giải quyết (deal with)',
    ipa: '/diːl/ - /delt/ - /delt/'
  },
  {
    v1: 'dig',
    v2: 'dug',
    v3: 'dug',
    meaning: 'đào, bới',
    ipa: '/dɪɡ/ - /dʌɡ/ - /dʌɡ/'
  },

  // Day 11 (disprove, dive, draw, dream, drink)
  {
    v1: 'disprove',
    v2: 'disproved',
    v3: 'disproven',
    v3_alt: ['disproved'],
    meaning: 'bác bỏ, chứng minh là sai',
    ipa: '/dɪsˈpruːv/ - /dɪsˈpruːvd/ - /dɪsˈpruːvn/'
  },
  {
    v1: 'dive',
    v2: 'dove',
    v3: 'dived',
    v2_alt: ['dived'],
    meaning: 'lặn, lao đầu xuống',
    ipa: '/daɪv/ - /doʊv/ - /daɪvd/'
  },
  {
    v1: 'draw',
    v2: 'drew',
    v3: 'drawn',
    meaning: 'vẽ, kéo, rút ra',
    ipa: '/drɔː/ - /druː/ - /drɔːn/'
  },
  {
    v1: 'dream',
    v2: 'dreamt',
    v3: 'dreamt',
    v2_alt: ['dreamed'],
    v3_alt: ['dreamed'],
    meaning: 'mơ ngủ, mơ ước',
    ipa: '/driːm/ - /dremt/ - /dremt/'
  },
  {
    v1: 'drink',
    v2: 'drank',
    v3: 'drunk',
    meaning: 'uống nước, uống rượu',
    ipa: '/drɪŋk/ - /dræŋk/ - /drʌŋk/'
  },

  // Day 12 (drive, dwell, eat, fall, feed)
  {
    v1: 'drive',
    v2: 'drove',
    v3: 'driven',
    meaning: 'lái xe (bốn bánh), thúc đẩy',
    ipa: '/draɪv/ - /droʊv/ - /ˈdrɪvn/'
  },
  {
    v1: 'dwell',
    v2: 'dwelt',
    v3: 'dwelt',
    meaning: 'ở, trú ngụ (tại đâu)',
    ipa: '/dwel/ - /dwelt/ - /dwelt/'
  },
  {
    v1: 'eat',
    v2: 'ate',
    v3: 'eaten',
    meaning: 'ăn',
    ipa: '/iːt/ - /eɪt/ - /ˈiːtn/'
  },
  {
    v1: 'fall',
    v2: 'fell',
    v3: 'fallen',
    meaning: 'ngã, rơi xuống',
    ipa: '/fɔːl/ - /fel/ - /ˈfɔːlən/'
  },
  {
    v1: 'feed',
    v2: 'fed',
    v3: 'fed',
    meaning: 'cho ăn, ăn, nuôi ăn',
    ipa: '/fiːd/ - /fed/ - /fed/'
  },

  // Day 13 (feel, fight, find, fit, flee)
  {
    v1: 'feel',
    v2: 'felt',
    v3: 'felt',
    meaning: 'cảm thấy, sờ thấy',
    ipa: '/fiːl/ - /felt/ - /felt/'
  },
  {
    v1: 'fight',
    v2: 'fought',
    v3: 'fought',
    meaning: 'chiến đấu, đấu tranh',
    ipa: '/faɪt/ - /fɔːt/ - /fɔːt/'
  },
  {
    v1: 'find',
    v2: 'found',
    v3: 'found',
    meaning: 'tìm kiếm, tìm thấy',
    ipa: '/faɪnd/ - /faʊnd/ - /faʊnd/'
  },
  {
    v1: 'fit',
    v2: 'fit',
    v3: 'fit',
    meaning: '(quần áo) vừa với ai, phù hợp',
    ipa: '/fɪt/ - /fɪt/ - /fɪt/'
  },
  {
    v1: 'flee',
    v2: 'fled',
    v3: 'fled',
    meaning: 'chạy trốn, chạy thoát',
    ipa: '/fliː/ - /fled/ - /fled/'
  },

  // Day 14 (fling, fly, forbid, forecast, forego)
  {
    v1: 'fling',
    v2: 'flung',
    v3: 'flung',
    meaning: 'quăng, tung, liệng',
    ipa: '/flɪŋ/ - /flʌŋ/ - /flʌŋ/'
  },
  {
    v1: 'fly',
    v2: 'flew',
    v3: 'flown',
    meaning: 'bay',
    ipa: '/flaɪ/ - /fluː/ - /floʊn/'
  },
  {
    v1: 'forbid',
    v2: 'forbade',
    v3: 'forbidden',
    meaning: 'cấm, ngăn cấm',
    ipa: '/fərˈbɪd/ - /fərˈbeɪd/ - /fərˈbɪdn/'
  },
  {
    v1: 'forecast',
    v2: 'forecast',
    v3: 'forecast',
    v2_alt: ['forecasted'],
    v3_alt: ['forecasted'],
    meaning: 'dự đoán, dự báo trước',
    ipa: '/ˈfɔːrkæst/ - /ˈfɔːrkæst/ - /ˈfɔːrkæst/'
  },
  {
    v1: 'forego',
    v2: 'forewent',
    v3: 'foregone',
    meaning: 'quyết định không có/làm cái bạn luôn muốn',
    ipa: '/fɔːrˈɡoʊ/ - /fɔːrˈwent/ - /fɔːrˈɡɒn/'
  },

  // Day 15 (foresee, foretell, forsake, freeze, frostbite)
  {
    v1: 'foresee',
    v2: 'foresaw',
    v3: 'foreseen',
    meaning: 'thấy trước được cái gì',
    ipa: '/fɔːrˈsiː/ - /fɔːrˈsɔː/ - /fɔːrˈsiːn/'
  },
  {
    v1: 'foretell',
    v2: 'foretold',
    v3: 'foretold',
    meaning: 'tiên đoán, nói trước được cái gì',
    ipa: '/fɔːrˈtel/ - /fɔːrˈtoʊld/ - /fɔːrˈtoʊld/'
  },
  {
    v1: 'forsake',
    v2: 'forsook',
    v3: 'forsaken',
    meaning: 'rũ bỏ, ruồng bỏ ai/cái gì',
    ipa: '/fərˈseɪk/ - /fərˈsʊk/ - /fərˈseɪkən/'
  },
  {
    v1: 'freeze',
    v2: 'froze',
    v3: 'frozen',
    meaning: 'đông lại, làm đông ai/cái gì',
    ipa: '/friːz/ - /froʊz/ - /ˈfroʊzn/'
  },
  {
    v1: 'frostbite',
    v2: 'frostbit',
    v3: 'frostbitten',
    meaning: 'làm/gây bỏng lạnh',
    ipa: '/ˈfrɒst.baɪt/ - /ˈfrɒst.bɪt/ - /ˈfrɒst.bɪtn/'
  },

  // Day 16 (gild, gird, give, grow, hand-feed)
  {
    v1: 'gild',
    v2: 'gilt',
    v3: 'gilt',
    v2_alt: ['gilded'],
    v3_alt: ['gilded'],
    meaning: 'mạ vàng',
    ipa: '/ɡɪld/ - /ɡɪlt/ - /ɡɪlt/'
  },
  {
    v1: 'gird',
    v2: 'girt',
    v3: 'girt',
    v2_alt: ['girded'],
    v3_alt: ['girded'],
    meaning: 'đeo vào, thắt dây',
    ipa: '/ɡɜːrd/ - /ɡɜːrt/ - /ɡɜːrt/'
  },
  {
    v1: 'give',
    v2: 'gave',
    v3: 'given',
    meaning: 'đưa cho, cho, tặng',
    ipa: '/ɡɪv/ - /ɡeɪv/ - /ˈɡɪvn/'
  },
  {
    v1: 'grow',
    v2: 'grew',
    v3: 'grown',
    meaning: 'mọc lên, lớn lên, trồng trọt',
    ipa: '/ɡroʊ/ - /ɡruː/ - /ɡroʊn/'
  },
  {
    v1: 'hand-feed',
    v2: 'hand-fed',
    v3: 'hand-fed',
    meaning: 'cho ăn bằng tay',
    ipa: '/ˈhænd.fiːd/ - /ˈhænd.fed/ - /ˈhænd.fed/'
  },

  // Day 17 (handwrite, hang, hear, heave, hew)
  {
    v1: 'handwrite',
    v2: 'handwrote',
    v3: 'handwritten',
    meaning: 'viết tay',
    ipa: '/ˈhænd.raɪt/ - /ˈhænd.roʊt/ - /ˈhænd.rɪtn/'
  },
  {
    v1: 'hang',
    v2: 'hung',
    v3: 'hung',
    meaning: 'treo lên, máng lên',
    ipa: '/hæŋ/ - /hʌŋ/ - /hʌŋ/'
  },
  {
    v1: 'hear',
    v2: 'heard',
    v3: 'heard',
    meaning: 'nghe, lắng nghe',
    ipa: '/hɪər/ - /hɜːrd/ - /hɜːrd/'
  },
  {
    v1: 'heave',
    v2: 'hove',
    v3: 'hove',
    v2_alt: ['heaved'],
    v3_alt: ['heaved'],
    meaning: 'trục lên, nâng mạnh',
    ipa: '/hiːv/ - /hoʊv/ - /hoʊv/'
  },
  {
    v1: 'hew',
    v2: 'hewed',
    v3: 'hewn',
    v3_alt: ['hewed'],
    meaning: 'chặt, đốn, đẽo',
    ipa: '/hjuː/ - /hjuːd/ - /hjuːn/'
  },

  // Day 18 (hide, hit, hurt, inbreed, inlay)
  {
    v1: 'hide',
    v2: 'hid',
    v3: 'hidden',
    meaning: 'giấu, trốn, nấp',
    ipa: '/haɪd/ - /hɪd/ - /ˈhɪdn/'
  },
  {
    v1: 'hit',
    v2: 'hit',
    v3: 'hit',
    meaning: 'đụng, va chạm, đánh trúng',
    ipa: '/hɪt/ - /hɪt/ - /hɪt/'
  },
  {
    v1: 'hurt',
    v2: 'hurt',
    v3: 'hurt',
    meaning: 'làm đau, bị thương, đau',
    ipa: '/hɜːrt/ - /hɜːrt/ - /hɜːrt/'
  },
  {
    v1: 'inbreed',
    v2: 'inbred',
    v3: 'inbred',
    meaning: 'lai giống cận huyết',
    ipa: '/ˈɪn.briːd/ - /ˈɪn.bred/ - /ˈɪn.bred/'
  },
  {
    v1: 'inlay',
    v2: 'inlaid',
    v3: 'inlaid',
    meaning: 'cẩn, khảm vào',
    ipa: '/ˌɪnˈleɪ/ - /ˌɪnˈleɪd/ - /ˌɪnˈleɪd/'
  },

  // Day 19 (input, inset, interbreed, interweave, interwind)
  {
    v1: 'input',
    v2: 'input',
    v3: 'input',
    meaning: 'đưa vào, nhập dữ liệu',
    ipa: '/ˈɪn.pʊt/ - /ˈɪn.pʊt/ - /ˈɪn.pʊt/'
  },
  {
    v1: 'inset',
    v2: 'inset',
    v3: 'inset',
    meaning: 'dát, ghép, chèn vào',
    ipa: '/ˈɪn.set/ - /ˈɪn.set/ - /ˈɪn.set/'
  },
  {
    v1: 'interbreed',
    v2: 'interbred',
    v3: 'interbred',
    meaning: 'giao phối, lai giống',
    ipa: '/ˌɪn.təˈbriːd/ - /ˌɪn.təˈbred/ - /ˌɪn.təˈbred/'
  },
  {
    v1: 'interweave',
    v2: 'interwove',
    v3: 'interwoven',
    v2_alt: ['interweaved'],
    v3_alt: ['interweaved'],
    meaning: 'trộn lẫn, xen lẫn, dệt cài',
    ipa: '/ˌɪn.təˈwiːv/ - /ˌɪn.təˈwoʊv/ - /ˌɪn.təˈwoʊvən/'
  },
  {
    v1: 'interwind',
    v2: 'interwound',
    v3: 'interwound',
    meaning: 'cuộn vào, quấn vào nhau',
    ipa: '/ˌɪn.təˈwaɪnd/ - /ˌɪn.təˈwaʊnd/ - /ˌɪn.təˈwaʊnd/'
  },

  // Day 20 (jerry-build, keep, kneel, knit, know)
  {
    v1: 'jerry-build',
    v2: 'jerry-built',
    v3: 'jerry-built',
    meaning: 'xây dựng cẩu thả',
    ipa: '/ˌdʒer.iˈbɪld/ - /ˌdʒer.iˈbɪlt/ - /ˌdʒer.iˈbɪlt/'
  },
  {
    v1: 'keep',
    v2: 'kept',
    v3: 'kept',
    meaning: 'giữ, duy trì',
    ipa: '/kiːp/ - /kept/ - /kept/'
  },
  {
    v1: 'kneel',
    v2: 'knelt',
    v3: 'knelt',
    v2_alt: ['kneeled'],
    v3_alt: ['kneeled'],
    meaning: 'quỳ, quỳ gối',
    ipa: '/niːl/ - /nelt/ - /nelt/'
  },
  {
    v1: 'knit',
    v2: 'knit',
    v3: 'knit',
    v2_alt: ['knitted'],
    v3_alt: ['knitted'],
    meaning: 'đan len, dệt sợi',
    ipa: '/nɪt/ - /nɪt/ - /nɪt/'
  },
  {
    v1: 'know',
    v2: 'knew',
    v3: 'known',
    meaning: 'biết, quen biết',
    ipa: '/noʊ/ - /njuː/ - /noʊn/'
  },

  // Day 21 (lay, lead, lean, leap, learn)
  {
    v1: 'lay',
    v2: 'laid',
    v3: 'laid',
    meaning: 'đặt, để, đẻ trứng',
    ipa: '/leɪ/ - /leɪd/ - /leɪd/'
  },
  {
    v1: 'lead',
    v2: 'led',
    v3: 'led',
    meaning: 'dẫn dắt, lãnh đạo',
    ipa: '/liːd/ - /led/ - /led/'
  },
  {
    v1: 'lean',
    v2: 'leant',
    v3: 'leant',
    v2_alt: ['leaned'],
    v3_alt: ['leaned'],
    meaning: 'dựa, tựa vào',
    ipa: '/liːn/ - /lent/ - /lent/'
  },
  {
    v1: 'leap',
    v2: 'leapt',
    v3: 'leapt',
    meaning: 'nhảy, nhảy qua',
    ipa: '/liːp/ - /lept/ - /lept/'
  },
  {
    v1: 'learn',
    v2: 'learnt',
    v3: 'learnt',
    v2_alt: ['learned'],
    v3_alt: ['learned'],
    meaning: 'học, được biết',
    ipa: '/lɜːrn/ - /lɜːrnt/ - /lɜːrnt/'
  },

  // Day 22 (leave, lend, let, lie, light)
  {
    v1: 'leave',
    v2: 'left',
    v3: 'left',
    meaning: 'ra đi, rời khỏi, để lại',
    ipa: '/liːv/ - /left/ - /left/'
  },
  {
    v1: 'lend',
    v2: 'lent',
    v3: 'lent',
    meaning: 'cho mượn, cho vay',
    ipa: '/lend/ - /lent/ - /lent/'
  },
  {
    v1: 'let',
    v2: 'let',
    v3: 'let',
    meaning: 'cho phép, để cho',
    ipa: '/let/ - /let/ - /let/'
  },
  {
    v1: 'lie',
    v2: 'lay',
    v3: 'lain',
    meaning: 'nằm, tọa lạc',
    ipa: '/laɪ/ - /leɪ/ - /leɪn/'
  },
  {
    v1: 'light',
    v2: 'lit',
    v3: 'lit',
    v2_alt: ['lighted'],
    v3_alt: ['lighted'],
    meaning: 'thắp sáng, châm lửa',
    ipa: '/laɪt/ - /lɪt/ - /lɪt/'
  },

  // Day 23 (lip-read, lose, make, mean, meet)
  {
    v1: 'lip-read',
    v2: 'lip-read',
    v3: 'lip-read',
    meaning: 'mấp máy môi, đọc khẩu hình',
    ipa: '/ˈlɪp.riːd/ - /ˈlɪp.red/ - /ˈlɪp.red/'
  },
  {
    v1: 'lose',
    v2: 'lost',
    v3: 'lost',
    meaning: 'làm mất, đánh mất, thua',
    ipa: '/luːz/ - /lɒst/ - /lɒst/'
  },
  {
    v1: 'make',
    v2: 'made',
    v3: 'made',
    meaning: 'chế tạo, sản xuất, làm',
    ipa: '/meɪk/ - /meɪd/ - /meɪd/'
  },
  {
    v1: 'mean',
    v2: 'meant',
    v3: 'meant',
    meaning: 'có nghĩa là, dự định',
    ipa: '/miːn/ - /ment/ - /ment/'
  },
  {
    v1: 'meet',
    v2: 'met',
    v3: 'met',
    meaning: 'gặp mặt, đón tiếp',
    ipa: '/miːt/ - /met/ - /met/'
  },

  // Day 24 (miscast, misdeal, misdo, mishear, mislay)
  {
    v1: 'miscast',
    v2: 'miscast',
    v3: 'miscast',
    meaning: 'chọn vai đóng không hợp',
    ipa: '/ˌmɪsˈkæst/ - /ˌmɪsˈkæst/ - /ˌmɪsˈkæst/'
  },
  {
    v1: 'misdeal',
    v2: 'misdealt',
    v3: 'misdealt',
    meaning: 'chia lộn bài, chia bài sai',
    ipa: '/ˌmɪsˈdiːl/ - /ˌmɪsˈdelt/ - /ˌmɪsˈdelt/'
  },
  {
    v1: 'misdo',
    v2: 'misdid',
    v3: 'misdone',
    meaning: 'phạm lỗi, làm sai',
    ipa: '/ˌmɪsˈduː/ - /ˌmɪsˈdɪd/ - /ˌmɪsˈdʌn/'
  },
  {
    v1: 'mishear',
    v2: 'misheard',
    v3: 'misheard',
    meaning: 'nghe nhầm, nghe không rõ',
    ipa: '/ˌmɪsˈhɪər/ - /ˌmɪsˈhɜːrd/ - /ˌmɪsˈhɜːrd/'
  },
  {
    v1: 'mislay',
    v2: 'mislaid',
    v3: 'mislaid',
    meaning: 'để lạc mất, đặt không đúng chỗ',
    ipa: '/ˌmɪsˈleɪ/ - /ˌmɪsˈleɪd/ - /ˌmɪsˈleɪd/'
  },

  // Day 25 (mislead, mislearn, misread, misset, misspeak)
  {
    v1: 'mislead',
    v2: 'misled',
    v3: 'misled',
    meaning: 'làm lạc đường, đánh lừa',
    ipa: '/ˌmɪsˈliːd/ - /ˌmɪsˈled/ - /ˌmɪsˈled/'
  },
  {
    v1: 'mislearn',
    v2: 'mislearned',
    v3: 'mislearned',
    v2_alt: ['mislearnt'],
    v3_alt: ['mislearnt'],
    meaning: 'học nhầm, hiểu sai kiến thức',
    ipa: '/ˌmɪsˈlɜːrn/ - /ˌmɪsˈlɜːrnd/ - /ˌmɪsˈlɜːrnd/'
  },
  {
    v1: 'misread',
    v2: 'misread',
    v3: 'misread',
    meaning: 'đọc sai, hiểu lầm văn bản',
    ipa: '/ˌmɪsˈriːd/ - /ˌmɪsˈred/ - /ˌmɪsˈred/'
  },
  {
    v1: 'misset',
    v2: 'misset',
    v3: 'misset',
    meaning: 'đặt sai chỗ, cài đặt sai',
    ipa: '/ˌmɪsˈset/ - /ˌmɪsˈset/ - /ˌmɪsˈset/'
  },
  {
    v1: 'misspeak',
    v2: 'misspoke',
    v3: 'misspoken',
    meaning: 'nói sai, nói lỡ lời',
    ipa: '/ˌmɪsˈspiːk/ - /ˌmɪsˈspoʊk/ - /ˌmɪsˈspoʊkən/'
  },

  // Day 26 (misspell, misspend, mistake, misteach, misunderstand)
  {
    v1: 'misspell',
    v2: 'misspelt',
    v3: 'misspelt',
    meaning: 'viết sai chính tả',
    ipa: '/ˌmɪsˈspel/ - /ˌmɪsˈspelt/ - /ˌmɪsˈspelt/'
  },
  {
    v1: 'misspend',
    v2: 'misspent',
    v3: 'misspent',
    meaning: 'tiêu phí, bỏ phí thời gian/tiền',
    ipa: '/ˌmɪsˈspend/ - /ˌmɪsˈspent/ - /ˌmɪsˈspent/'
  },
  {
    v1: 'mistake',
    v2: 'mistook',
    v3: 'mistaken',
    meaning: 'phạm lỗi, lầm lẫn',
    ipa: '/mɪˈsteɪk/ - /mɪˈstʊk/ - /mɪˈsteɪkən/'
  },
  {
    v1: 'misteach',
    v2: 'mistaught',
    v3: 'mistaught',
    meaning: 'dạy sai',
    ipa: '/ˌmɪsˈtiːtʃ/ - /ˌmɪsˈtɔːt/ - /ˌmɪsˈtɔːt/'
  },
  {
    v1: 'misunderstand',
    v2: 'misunderstood',
    v3: 'misunderstood',
    meaning: 'hiểu lầm, hiểu sai ý',
    ipa: '/ˌmɪs.ʌn.dəˈstænd/ - /ˌmɪs.ʌn.dəˈstʊd/ - /ˌmɪs.ʌn.dəˈstʊd/'
  },

  // Day 27 (miswrite, mow, offset, outbid, outbreed)
  {
    v1: 'miswrite',
    v2: 'miswrote',
    v3: 'miswritten',
    meaning: 'viết sai',
    ipa: '/ˌmɪsˈraɪt/ - /ˌmɪsˈroʊt/ - /ˌmɪsˈrɪtn/'
  },
  {
    v1: 'mow',
    v2: 'mowed',
    v3: 'mown',
    v3_alt: ['mowed'],
    meaning: 'cắt cỏ',
    ipa: '/moʊ/ - /moʊd/ - /moʊn/'
  },
  {
    v1: 'offset',
    v2: 'offset',
    v3: 'offset',
    meaning: 'đền bù, bù trừ',
    ipa: '/ˈɒf.set/ - /ˈɒf.set/ - /ˈɒf.set/'
  },
  {
    v1: 'outbid',
    v2: 'outbid',
    v3: 'outbid',
    meaning: 'trả hơn giá, đấu giá cao hơn',
    ipa: '/ˌaʊtˈbɪd/ - /ˌaʊtˈbɪd/ - /ˌaʊtˈbɪd/'
  },
  {
    v1: 'outbreed',
    v2: 'outbred',
    v3: 'outbred',
    meaning: 'giao phối xa',
    ipa: '/ˌaʊtˈbriːd/ - /ˌaʊtˈbred/ - /ˌaʊtˈbred/'
  },

  // Day 28 (outdo, outdraw, outdrink, outdrive, outfight)
  {
    v1: 'outdo',
    v2: 'outdid',
    v3: 'outdone',
    meaning: 'làm giỏi hơn, vượt trội hơn',
    ipa: '/ˌaʊtˈduː/ - /ˌaʊtˈdɪd/ - /ˌaʊtˈdʌn/'
  },
  {
    v1: 'outdraw',
    v2: 'outdrew',
    v3: 'outdrawn',
    meaning: 'rút súng ra nhanh hơn',
    ipa: '/ˌaʊtˈdrɔː/ - /ˌaʊtˈdruː/ - /ˌaʊtˈdrɔːn/'
  },
  {
    v1: 'outdrink',
    v2: 'outdrank',
    v3: 'outdrunk',
    meaning: 'uống quá chén, uống nhiều hơn',
    ipa: '/ˌaʊtˈdrɪŋk/ - /ˌaʊtˈdræŋk/ - /ˌaʊtˈdrʌŋk/'
  },
  {
    v1: 'outdrive',
    v2: 'outdrove',
    v3: 'outdriven',
    meaning: 'lái nhanh hơn, đánh xa hơn',
    ipa: '/ˌaʊtˈdraɪv/ - /ˌaʊtˈdroʊv/ - /ˌaʊtˈdrɪvn/'
  },
  {
    v1: 'outfight',
    v2: 'outfought',
    v3: 'outfought',
    meaning: 'đánh giỏi hơn, hạ gục',
    ipa: '/ˌaʊtˈfaɪt/ - /ˌaʊtˈfɔːt/ - /ˌaʊtˈfɔːt/'
  },

  // Day 29 (outfly, outgrow, outleap, output, outride)
  {
    v1: 'outfly',
    v2: 'outflew',
    v3: 'outflown',
    meaning: 'bay cao/xa hơn',
    ipa: '/ˌaʊtˈflaɪ/ - /ˌaʊtˈfluː/ - /ˌaʊtˈfloʊn/'
  },
  {
    v1: 'outgrow',
    v2: 'outgrew',
    v3: 'outgrown',
    meaning: 'lớn nhanh hơn, lớn vượt quá',
    ipa: '/ˌaʊtˈɡroʊ/ - /ˌaʊtˈɡruː/ - /ˌaʊtˈɡroʊn/'
  },
  {
    v1: 'outleap',
    v2: 'outleaped',
    v3: 'outleaped',
    v2_alt: ['outleapt'],
    v3_alt: ['outleapt'],
    meaning: 'nhảy cao/xa hơn',
    ipa: '/ˌaʊtˈliːp/ - /ˌaʊtˈlept/ - /ˌaʊtˈlept/'
  },
  {
    v1: 'output',
    v2: 'output',
    v3: 'output',
    meaning: 'cho ra (dữ kiện), xuất bản',
    ipa: '/ˈaʊt.pʊt/ - /ˈaʊt.pʊt/ - /ˈaʊt.pʊt/'
  },
  {
    v1: 'outride',
    v2: 'outrode',
    v3: 'outridden',
    meaning: 'cưỡi ngựa giỏi hơn, vượt qua',
    ipa: '/ˌaʊtˈraɪd/ - /ˌaʊtˈroʊd/ - /ˌaʊtˈrɪdn/'
  },

  // Day 30 (outrun, outsell, outshine, outshoot, outsing)
  {
    v1: 'outrun',
    v2: 'outran',
    v3: 'outrun',
    meaning: 'chạy nhanh hơn, vượt giá',
    ipa: '/ˌaʊtˈrʌn/ - /ˌaʊtˈræn/ - /ˌaʊtˈrʌn/'
  },
  {
    v1: 'outsell',
    v2: 'outsold',
    v3: 'outsold',
    meaning: 'bán nhanh hơn, bán chạy hơn',
    ipa: '/ˌaʊtˈsel/ - /ˌaʊtˈsoʊld/ - /ˌaʊtˈsoʊld/'
  },
  {
    v1: 'outshine',
    v2: 'outshined',
    v3: 'outshined',
    v2_alt: ['outshone'],
    v3_alt: ['outshone'],
    meaning: 'sáng hơn, rạng rỡ hơn',
    ipa: '/ˌaʊtˈʃaɪn/ - /ˌaʊtˈʃɒn/ - /ˌaʊtˈʃɒn/'
  },
  {
    v1: 'outshoot',
    v2: 'outshot',
    v3: 'outshot',
    meaning: 'bắn giỏi hơn, nảy mầm, mọc',
    ipa: '/ˌaʊtˈʃuːt/ - /ˌaʊtˈʃɒt/ - /ˌaʊtˈʃɒt/'
  },
  {
    v1: 'outsing',
    v2: 'outsang',
    v3: 'outsung',
    meaning: 'hát hay hơn, hát to hơn',
    ipa: '/ˌaʊtˈsɪŋ/ - /ˌaʊtˈsæŋ/ - /ˌaʊtˈsʌŋ/'
  },

  // Day 31 (outsit, outsleep, outsmell, outspeak, outspeed)
  {
    v1: 'outsit',
    v2: 'outsat',
    v3: 'outsat',
    meaning: 'ngồi lâu hơn',
    ipa: '/ˌaʊtˈsɪt/ - /ˌaʊtˈsæt/ - /ˌaʊtˈsæt/'
  },
  {
    v1: 'outsleep',
    v2: 'outslept',
    v3: 'outslept',
    meaning: 'ngủ lâu/muộn hơn',
    ipa: '/ˌaʊtˈsliːp/ - /ˌaʊtˈslept/ - /ˌaʊtˈslept/'
  },
  {
    v1: 'outsmell',
    v2: 'outsmelled',
    v3: 'outsmelled',
    v2_alt: ['outsmelt'],
    v3_alt: ['outsmelt'],
    meaning: 'khám phá, đánh hơi, sặc mùi',
    ipa: '/ˌaʊtˈsmel/ - /ˌaʊtˈsmelt/ - /ˌaʊtˈsmelt/'
  },
  {
    v1: 'outspeak',
    v2: 'outspoke',
    v3: 'outspoken',
    meaning: 'nói nhiều/dài/to hơn',
    ipa: '/ˌaʊtˈspiːk/ - /ˌaʊtˈspoʊk/ - /ˌaʊtˈspoʊkən/'
  },
  {
    v1: 'outspeed',
    v2: 'outsped',
    v3: 'outsped',
    meaning: 'đi/chạy nhanh hơn',
    ipa: '/ˌaʊtˈspiːd/ - /ˌaʊtˈsped/ - /ˌaʊtˈsped/'
  },

  // Day 32 (outspend, outswear, outswim, outthink, outthrow)
  {
    v1: 'outspend',
    v2: 'outspent',
    v3: 'outspent',
    meaning: 'tiêu tiền nhiều hơn',
    ipa: '/ˌaʊtˈspend/ - /ˌaʊtˈspent/ - /ˌaʊtˈspent/'
  },
  {
    v1: 'outswear',
    v2: 'outswore',
    v3: 'outsworn',
    meaning: 'nguyền rủa nhiều hơn',
    ipa: '/ˌaʊtˈsweər/ - /ˌaʊtˈswɔːr/ - /ˌaʊtˈswɔːrn/'
  },
  {
    v1: 'outswim',
    v2: 'outswam',
    v3: 'outswam',
    meaning: 'bơi giỏi hơn',
    ipa: '/ˌaʊtˈswɪm/ - /ˌaʊtˈswæm/ - /ˌaʊtˈswʌm/'
  },
  {
    v1: 'outthink',
    v2: 'outthought',
    v3: 'outthought',
    meaning: 'suy nghĩ nhanh hơn',
    ipa: '/ˌaʊtˈθɪŋk/ - /ˌaʊtˈθɔːt/ - /ˌaʊtˈθɔːt/'
  },
  {
    v1: 'outthrow',
    v2: 'outthrew',
    v3: 'outthrown',
    meaning: 'ném nhanh hơn, ném xa hơn',
    ipa: '/ˌaʊtˈθroʊ/ - /ˌaʊtˈθruː/ - /ˌaʊtˈθroʊn/'
  },

  // Day 33 (outwrite, overbid, overbreed, overbuild, overbuy)
  {
    v1: 'outwrite',
    v2: 'outwrote',
    v3: 'outwritten',
    meaning: 'viết nhanh hơn',
    ipa: '/ˌaʊtˈraɪt/ - /ˌaʊtˈroʊt/ - /ˌaʊtˈrɪtn/'
  },
  {
    v1: 'overbid',
    v2: 'overbid',
    v3: 'overbid',
    meaning: 'bỏ thầu cao hơn',
    ipa: '/ˌoʊ.vərˈbɪd/ - /ˌoʊ.vərˈbɪd/ - /ˌoʊ.vərˈbɪd/'
  },
  {
    v1: 'overbreed',
    v2: 'overbred',
    v3: 'overbred',
    meaning: 'nuôi quá nhiều',
    ipa: '/ˌoʊ.vərˈbriːd/ - /ˌoʊ.vərˈbred/ - /ˌoʊ.vərˈbred/'
  },
  {
    v1: 'overbuild',
    v2: 'overbuilt',
    v3: 'overbuilt',
    meaning: 'xây quá nhiều',
    ipa: '/ˌoʊ.vərˈbɪld/ - /ˌoʊ.vərˈbɪlt/ - /ˌoʊ.vərˈbɪlt/'
  },
  {
    v1: 'overbuy',
    v2: 'overbought',
    v3: 'overbought',
    meaning: 'mua quá nhiều',
    ipa: '/ˌoʊ.vərˈbaɪ/ - /ˌoʊ.vərˈbɔːt/ - /ˌoʊ.vərˈbɔːt/'
  },

  // Day 34 (overcome, overdo, overdraw, overdrink, overeat)
  {
    v1: 'overcome',
    v2: 'overcame',
    v3: 'overcome',
    meaning: 'khắc phục, vượt qua',
    ipa: '/ˌoʊ.vərˈkʌm/ - /ˌoʊ.vərˈkeɪm/ - /ˌoʊ.vərˈkʌm/'
  },
  {
    v1: 'overdo',
    v2: 'overdid',
    v3: 'overdone',
    meaning: 'dùng quá mức, làm quá',
    ipa: '/ˌoʊ.vərˈduː/ - /ˌoʊ.vərˈdɪd/ - /ˌoʊ.vərˈdʌn/'
  },
  {
    v1: 'overdraw',
    v2: 'overdrew',
    v3: 'overdrawn',
    meaning: 'rút quá số tiền, phóng đại',
    ipa: '/ˌoʊ.vərˈdrɔː/ - /ˌoʊ.vərˈdruː/ - /ˌoʊ.vərˈdrɔːn/'
  },
  {
    v1: 'overdrink',
    v2: 'overdrank',
    v3: 'overdrunk',
    meaning: 'uống quá nhiều',
    ipa: '/ˌoʊ.vərˈdrɪŋk/ - /ˌoʊ.vərˈdræŋk/ - /ˌoʊ.vərˈdrʌŋk/'
  },
  {
    v1: 'overeat',
    v2: 'overate',
    v3: 'overeaten',
    meaning: 'ăn quá nhiều',
    ipa: '/ˌoʊ.vərˈiːt/ - /ˌoʊ.vərˈeɪt/ - /ˌoʊ.vərˈiːtn/'
  },

  // Day 35 (overfeed, overfly, overhang, overhear, overlay)
  {
    v1: 'overfeed',
    v2: 'overfed',
    v3: 'overfed',
    meaning: 'cho ăn quá mức',
    ipa: '/ˌoʊ.vərˈfiːd/ - /ˌoʊ.vərˈfed/ - /ˌoʊ.vərˈfed/'
  },
  {
    v1: 'overfly',
    v2: 'overflew',
    v3: 'overflown',
    meaning: 'bay qua',
    ipa: '/ˌoʊ.vərˈflaɪ/ - /ˌoʊ.vərˈfluː/ - /ˌoʊ.vərˈfloʊn/'
  },
  {
    v1: 'overhang',
    v2: 'overhung',
    v3: 'overhung',
    meaning: 'nhô lên trên, treo lơ lửng',
    ipa: '/ˌoʊ.vərˈhæŋ/ - /ˌoʊ.vərˈhʌŋ/ - /ˌoʊ.vərˈhʌŋ/'
  },
  {
    v1: 'overhear',
    v2: 'overheard',
    v3: 'overheard',
    meaning: 'nghe trộm, tình cờ nghe',
    ipa: '/ˌoʊ.vərˈhɪər/ - /ˌoʊ.vərˈhɜːrd/ - /ˌoʊ.vərˈhɜːrd/'
  },
  {
    v1: 'overlay',
    v2: 'overlaid',
    v3: 'overlaid',
    meaning: 'phủ lên, lót lên',
    ipa: '/ˌoʊ.vərˈleɪ/ - /ˌoʊ.vərˈleɪd/ - /ˌoʊ.vərˈleɪd/'
  },

  // Day 36 (overpay, override, overrun, oversee, oversell)
  {
    v1: 'overpay',
    v2: 'overpaid',
    v3: 'overpaid',
    meaning: 'trả quá tiền',
    ipa: '/ˌoʊ.vərˈpeɪ/ - /ˌoʊ.vərˈpeɪd/ - /ˌoʊ.vərˈpeɪd/'
  },
  {
    v1: 'override',
    v2: 'overrode',
    v3: 'overridden',
    meaning: 'lạm quyền, gạt bỏ',
    ipa: '/ˌoʊ.vərˈraɪd/ - /ˌoʊ.vərˈroʊd/ - /ˌoʊ.vərˈrɪdn/'
  },
  {
    v1: 'overrun',
    v2: 'overran',
    v3: 'overrun',
    meaning: 'tràn ngập, vượt quá thời hạn',
    ipa: '/ˌoʊ.vərˈrʌn/ - /ˌoʊ.vərˈræn/ - /ˌoʊ.vərˈrʌn/'
  },
  {
    v1: 'oversee',
    v2: 'oversaw',
    v3: 'overseen',
    meaning: 'trông nom, giám sát',
    ipa: '/ˌoʊ.vərˈsiː/ - /ˌoʊ.vərˈsɔː/ - /ˌoʊ.vərˈsiːn/'
  },
  {
    v1: 'oversell',
    v2: 'oversold',
    v3: 'oversold',
    meaning: 'bán quá mức',
    ipa: '/ˌoʊ.vərˈsel/ - /ˌoʊ.vərˈsoʊld/ - /ˌoʊ.vərˈsoʊld/'
  },

  // Day 37 (oversew, overshoot, oversleep, overspeak, overspend)
  {
    v1: 'oversew',
    v2: 'oversewed',
    v3: 'oversewn',
    v3_alt: ['oversewed'],
    meaning: 'may nối vắt',
    ipa: '/ˌoʊ.vərˈsoʊ/ - /ˌoʊ.vərˈsoʊd/ - /ˌoʊ.vərˈsoʊn/'
  },
  {
    v1: 'overshoot',
    v2: 'overshot',
    v3: 'overshot',
    meaning: 'đi quá đích, bắn trượt qua',
    ipa: '/ˌoʊ.vərˈʃuːt/ - /ˌoʊ.vərˈʃɒt/ - /ˌoʊ.vərˈʃɒt/'
  },
  {
    v1: 'oversleep',
    v2: 'overslept',
    v3: 'overslept',
    meaning: 'ngủ quên',
    ipa: '/ˌoʊ.vərˈsliːp/ - /ˌoʊ.vərˈslept/ - /ˌoʊ.vərˈslept/'
  },
  {
    v1: 'overspeak',
    v2: 'overspoke',
    v3: 'overspoken',
    meaning: 'nói quá nhiều, nói lấn át',
    ipa: '/ˌoʊ.vərˈspiːk/ - /ˌoʊ.vərˈspoʊk/ - /ˌoʊ.vərˈspoʊkən/'
  },
  {
    v1: 'overspend',
    v2: 'overspent',
    v3: 'overspent',
    meaning: 'tiêu quá lố, chi tiêu vượt mức',
    ipa: '/ˌoʊ.vərˈspend/ - /ˌoʊ.vərˈspent/ - /ˌoʊ.vərˈspent/'
  },

  // Day 38 (overspill, overtake, overthink, overthrow, overwind)
  {
    v1: 'overspill',
    v2: 'overspilled',
    v3: 'overspilled',
    v2_alt: ['overspilt'],
    v3_alt: ['overspilt'],
    meaning: 'đổ, làm tràn',
    ipa: '/ˌoʊ.vərˈspɪl/ - /ˌoʊ.vərˈspɪld/ - /ˌoʊ.vərˈspɪld/'
  },
  {
    v1: 'overtake',
    v2: 'overtook',
    v3: 'overtook',
    v3_alt: ['overtaken'],
    meaning: 'đuổi bắt kịp, vượt qua',
    ipa: '/ˌoʊ.vərˈteɪk/ - /ˌoʊ.vərˈtʊk/ - /ˌoʊ.vərˈteɪkən/'
  },
  {
    v1: 'overthink',
    v2: 'overthought',
    v3: 'overthought',
    meaning: 'tính trước nhiều quá, nghĩ ngợi thái quá',
    ipa: '/ˌoʊ.vərˈθɪŋk/ - /ˌoʊ.vərˈθɔːt/ - /ˌoʊ.vərˈθɔːt/'
  },
  {
    v1: 'overthrow',
    v2: 'overthrew',
    v3: 'overthrown',
    meaning: 'lật đổ',
    ipa: '/ˌoʊ.vərˈθroʊ/ - /ˌoʊ.vərˈθruː/ - /ˌoʊ.vərˈθroʊn/'
  },
  {
    v1: 'overwind',
    v2: 'overwound',
    v3: 'overwound',
    meaning: 'lên dây (đồng hồ) quá chặt',
    ipa: '/ˌoʊ.vərˈwaɪnd/ - /ˌoʊ.vərˈwaʊnd/ - /ˌoʊ.vərˈwaʊnd/'
  },

  // Day 39 (overwrite, partake, pay, plead, prebuild)
  {
    v1: 'overwrite',
    v2: 'overwrote',
    v3: 'overwritten',
    meaning: 'viết dài quá, viết đè lên',
    ipa: '/ˌoʊ.vərˈraɪt/ - /ˌoʊ.vərˈroʊt/ - /ˌoʊ.vərˈrɪtn/'
  },
  {
    v1: 'partake',
    v2: 'partook',
    v3: 'partaken',
    meaning: 'tham gia, dự phần',
    ipa: '/pɑːrˈteɪk/ - /pɑːrˈtʊk/ - /pɑːrˈteɪkən/'
  },
  {
    v1: 'pay',
    v2: 'paid',
    v3: 'paid',
    meaning: 'trả (tiền)',
    ipa: '/peɪ/ - /peɪd/ - /peɪd/'
  },
  {
    v1: 'plead',
    v2: 'pleaded',
    v3: 'pleaded',
    v2_alt: ['pled'],
    v3_alt: ['pled'],
    meaning: 'bào chữa, biện hộ, cầu xin',
    ipa: '/pliːd/ - /ˈpliːdɪd/ - /ˈpliːdɪd/'
  },
  {
    v1: 'prebuild',
    v2: 'prebuilt',
    v3: 'prebuilt',
    meaning: 'làm nhà tiền chế, chế tạo trước',
    ipa: '/ˌpriːˈbɪld/ - /ˌpriːˈbɪlt/ - /ˌpriːˈbɪlt/'
  },

  // Day 40 (predo, premake, prepay, presell, preset)
  {
    v1: 'predo',
    v2: 'predid',
    v3: 'predone',
    meaning: 'làm trước',
    ipa: '/ˌpriːˈduː/ - /ˌpriːˈdɪd/ - /ˌpriːˈdʌn/'
  },
  {
    v1: 'premake',
    v2: 'premade',
    v3: 'premade',
    meaning: 'sản xuất trước, làm trước',
    ipa: '/ˌpriːˈmeɪk/ - /ˌpriːˈmeɪd/ - /ˌpriːˈmeɪd/'
  },
  {
    v1: 'prepay',
    v2: 'prepaid',
    v3: 'prepaid',
    meaning: 'trả trước',
    ipa: '/ˌpriːˈpeɪ/ - /ˌpriːˈpeɪd/ - /ˌpriːˈpeɪd/'
  },
  {
    v1: 'presell',
    v2: 'presold',
    v3: 'presold',
    meaning: 'bán trước thời gian rao báo',
    ipa: '/ˌpriːˈsel/ - /ˌpriːˈsoʊld/ - /ˌpriːˈsoʊld/'
  },
  {
    v1: 'preset',
    v2: 'preset',
    v3: 'preset',
    meaning: 'thiết lập sẵn, cài đặt sẵn',
    ipa: '/ˌpriːˈset/ - /ˌpriːˈset/ - /ˌpriːˈset/'
  },

  // Day 41 (preshrink, proofread, prove, put, quick-freeze)
  {
    v1: 'preshrink',
    v2: 'preshrank',
    v3: 'preshrunk',
    meaning: 'ngâm cho vải co trước khi may',
    ipa: '/ˌpriːˈʃrɪŋk/ - /ˌpriːˈʃræŋk/ - /ˌpriːˈʃrʌŋk/'
  },
  {
    v1: 'proofread',
    v2: 'proofread',
    v3: 'proofread',
    meaning: 'đọc bản thảo trước khi in',
    ipa: '/ˈpruːf.riːd/ - /ˈpruːf.red/ - /ˈpruːf.red/'
  },
  {
    v1: 'prove',
    v2: 'proved',
    v3: 'proven',
    v3_alt: ['proved'],
    meaning: 'chứng minh, chứng tỏ',
    ipa: '/pruːv/ - /pruːvd/ - /ˈpruːvn/'
  },
  {
    v1: 'put',
    v2: 'put',
    v3: 'put',
    meaning: 'đặt, để',
    ipa: '/pʊt/ - /pʊt/ - /pʊt/'
  },
  {
    v1: 'quick-freeze',
    v2: 'quick-froze',
    v3: 'quick-frozen',
    meaning: 'kết đông nhanh',
    ipa: '/ˌkwɪkˈfriːz/ - /ˌkwɪkˈfroʊz/ - /ˌkwɪkˈfroʊzn/'
  },

  // Day 42 (quit, read, reawake, rebid, rebind)
  {
    v1: 'quit',
    v2: 'quit',
    v3: 'quit',
    v2_alt: ['quitted'],
    v3_alt: ['quitted'],
    meaning: 'bỏ, từ bỏ, ngừng lại',
    ipa: '/kwɪt/ - /kwɪt/ - /kwɪt/'
  },
  {
    v1: 'read',
    v2: 'read',
    v3: 'read',
    meaning: 'đọc',
    ipa: '/riːd/ - /red/ - /red/'
  },
  {
    v1: 'reawake',
    v2: 'reawoke',
    v3: 'reawake',
    meaning: 'đánh thức một lần nữa',
    ipa: '/ˌriː.əˈweɪk/ - /ˌriː.əˈwoʊk/ - /ˌriː.əˈweɪk/'
  },
  {
    v1: 'rebid',
    v2: 'rebid',
    v3: 'rebid',
    meaning: 'trả giá, bỏ thầu lại',
    ipa: '/ˌriːˈbɪd/ - /ˌriːˈbɪd/ - /ˌriːˈbɪd/'
  },
  {
    v1: 'rebind',
    v2: 'rebound',
    v3: 'rebound',
    meaning: 'buộc lại, đóng lại (sách)',
    ipa: '/ˌriːˈbaɪnd/ - /ˌriːˈbaʊnd/ - /ˌriːˈbaʊnd/'
  },

  // Day 43 (rebroadcast, rebuild, recast, recut, redeal)
  {
    v1: 'rebroadcast',
    v2: 'rebroadcast',
    v3: 'rebroadcast',
    v2_alt: ['rebroadcasted'],
    v3_alt: ['rebroadcasted'],
    meaning: 'chiếu lại, phát sóng lại',
    ipa: '/ˌriːˈbrɔːdkæst/ - /ˌriːˈbrɔːdkæst/ - /ˌriːˈbrɔːdkæst/'
  },
  {
    v1: 'rebuild',
    v2: 'rebuilt',
    v3: 'rebuilt',
    meaning: 'xây dựng lại',
    ipa: '/ˌriːˈbɪld/ - /ˌriːˈbɪlt/ - /ˌriːˈbɪlt/'
  },
  {
    v1: 'recast',
    v2: 'recast',
    v3: 'recast',
    meaning: 'đúc lại, phân vai lại',
    ipa: '/ˌriːˈkæst/ - /ˌriːˈkæst/ - /ˌriːˈkæst/'
  },
  {
    v1: 'recut',
    v2: 'recut',
    v3: 'recut',
    meaning: 'cắt lại, băm lại',
    ipa: '/ˌriːˈkʌt/ - /ˌriːˈkʌt/ - /ˌriːˈkʌt/'
  },
  {
    v1: 'redeal',
    v2: 'redealt',
    v3: 'redealt',
    meaning: 'phát bài lại, chia bài lại',
    ipa: '/ˌriːˈdiːl/ - /ˌriːˈdelt/ - /ˌriːˈdelt/'
  },

  // Day 44 (redo, redraw, refit, regrind, regrow)
  {
    v1: 'redo',
    v2: 'redid',
    v3: 'redone',
    meaning: 'làm lại',
    ipa: '/ˌriːˈduː/ - /ˌriːˈdɪd/ - /ˌriːˈdʌn/'
  },
  {
    v1: 'redraw',
    v2: 'redrew',
    v3: 'redrawn',
    meaning: 'kéo ngược lại, vẽ lại',
    ipa: '/ˌriːˈdrɔː/ - /ˌriːˈdruː/ - /ˌriːˈdrɔːn/'
  },
  {
    v1: 'refit',
    v2: 'refitted',
    v3: 'refitted',
    v2_alt: ['refit'],
    v3_alt: ['refit'],
    meaning: 'sửa chữa, tân trang lại',
    ipa: '/ˌriːˈfɪt/ - /ˌriːˈfɪtɪd/ - /ˌriːˈfɪtɪd/'
  },
  {
    v1: 'regrind',
    v2: 'reground',
    v3: 'reground',
    meaning: 'mài sắc lại',
    ipa: '/ˌriːˈɡraɪnd/ - /ˌriːˈɡraʊnd/ - /ˌriːˈɡraʊnd/'
  },
  {
    v1: 'regrow',
    v2: 'regrew',
    v3: 'regrown',
    meaning: 'trồng lại, mọc lại',
    ipa: '/ˌriːˈɡroʊ/ - /ˌriːˈɡruː/ - /ˌriːˈɡroʊn/'
  },

  // Day 45 (rehang, rehear, reknit, relay, relearn)
  {
    v1: 'rehang',
    v2: 'rehung',
    v3: 'rehung',
    meaning: 'treo lại',
    ipa: '/ˌriːˈhæŋ/ - /ˌriːˈhʌŋ/ - /ˌriːˈhʌŋ/'
  },
  {
    v1: 'rehear',
    v2: 'reheard',
    v3: 'reheard',
    meaning: 'nghe trình bày lại',
    ipa: '/ˌriːˈhɪər/ - /ˌriːˈhɜːrd/ - /ˌriːˈhɜːrd/'
  },
  {
    v1: 'reknit',
    v2: 'reknitted',
    v3: 'reknitted',
    v2_alt: ['reknit'],
    v3_alt: ['reknit'],
    meaning: 'đan lại, dệt lại',
    ipa: '/ˌriːˈnɪt/ - /ˌriːˈnɪtɪd/ - /ˌriːˈnɪtɪd/'
  },
  {
    v1: 'relay',
    v2: 'relaid',
    v3: 'relaid',
    meaning: 'đặt lại, truyền âm lại',
    ipa: '/ˌriːˈleɪ/ - /ˌriːˈleɪd/ - /ˌriːˈleɪd/'
  },
  {
    v1: 'relearn',
    v2: 'relearned',
    v3: 'relearned',
    v2_alt: ['relearnt'],
    v3_alt: ['relearnt'],
    meaning: 'học lại',
    ipa: '/ˌriːˈlɜːrn/ - /ˌriːˈlɜːrnd/ - /ˌriːˈlɜːrnd/'
  },

  // Day 46 (relight, remake, rend, repay, reread)
  {
    v1: 'relight',
    v2: 'relit',
    v3: 'relit',
    v2_alt: ['relighted'],
    v3_alt: ['relighted'],
    meaning: 'thắp sáng lại',
    ipa: '/ˌriːˈlaɪt/ - /ˌriːˈlɪt/ - /ˌriːˈlɪt/'
  },
  {
    v1: 'remake',
    v2: 'remade',
    v3: 'remade',
    meaning: 'làm lại, chế tạo lại',
    ipa: '/ˌriːˈmeɪk/ - /ˌriːˈmeɪd/ - /ˌriːˈmeɪd/'
  },
  {
    v1: 'rend',
    v2: 'rent',
    v3: 'rent',
    meaning: 'toạc ra, xé rách',
    ipa: '/rend/ - /rent/ - /rent/'
  },
  {
    v1: 'repay',
    v2: 'repaid',
    v3: 'repaid',
    meaning: 'hoàn tiền lại, trả nợ',
    ipa: '/riːˈpeɪ/ - /riːˈpeɪd/ - /riːˈpeɪd/'
  },
  {
    v1: 'reread',
    v2: 'reread',
    v3: 'reread',
    meaning: 'đọc lại',
    ipa: '/ˌriːˈriːd/ - /ˌriːˈred/ - /ˌriːˈred/'
  },

  // Day 47 (rerun, resell, resend, reset, resew)
  {
    v1: 'rerun',
    v2: 'reran',
    v3: 'rerun',
    meaning: 'chiếu lại, phát lại',
    ipa: '/ˌriːˈrʌn/ - /ˌriːˈræn/ - /ˌriːˈrʌn/'
  },
  {
    v1: 'resell',
    v2: 'resold',
    v3: 'resold',
    meaning: 'bán lại',
    ipa: '/ˌriːˈsel/ - /ˌriːˈsoʊld/ - /ˌriːˈsoʊld/'
  },
  {
    v1: 'resend',
    v2: 'resent',
    v3: 'resent',
    meaning: 'gửi lại',
    ipa: '/ˌriːˈsend/ - /ˌriːˈsent/ - /ˌriːˈsent/'
  },
  {
    v1: 'reset',
    v2: 'reset',
    v3: 'reset',
    meaning: 'đặt lại, lắp lại',
    ipa: '/ˌriːˈset/ - /ˌriːˈset/ - /ˌriːˈset/'
  },
  {
    v1: 'resew',
    v2: 'resewed',
    v3: 'resewn',
    v3_alt: ['resewed'],
    meaning: 'may/khâu lại',
    ipa: '/ˌriːˈsoʊ/ - /ˌriːˈsoʊd/ - /ˌriːˈsoʊn/'
  },

  // Day 48 (retake, reteach, retear, retell, rethink)
  {
    v1: 'retake',
    v2: 'retook',
    v3: 'retaken',
    meaning: 'chiếm lại, tái chiếm, thi lại',
    ipa: '/ˌriːˈteɪk/ - /ˌriːˈtʊk/ - /ˌriːˈteɪkən/'
  },
  {
    v1: 'reteach',
    v2: 'retaught',
    v3: 'retaught',
    meaning: 'dạy lại',
    ipa: '/ˌriːˈtiːtʃ/ - /ˌriːˈtɔːt/ - /ˌriːˈtɔːt/'
  },
  {
    v1: 'retear',
    v2: 'retore',
    v3: 'retorn',
    meaning: 'khóc lại, xé lại',
    ipa: '/ˌriːˈteər/ - /ˌriːˈtɔːr/ - /ˌriːˈtɔːrn/'
  },
  {
    v1: 'retell',
    v2: 'retold',
    v3: 'retold',
    meaning: 'kể lại',
    ipa: '/ˌriːˈtel/ - /ˌriːˈtoʊld/ - /ˌriːˈtoʊld/'
  },
  {
    v1: 'rethink',
    v2: 'rethought',
    v3: 'rethought',
    meaning: 'suy tính lại',
    ipa: '/ˌriːˈθɪŋk/ - /ˌriːˈθɔːt/ - /ˌriːˈθɔːt/'
  },

  // Day 49 (retread, retrofit, rewake, rewear, reweave)
  {
    v1: 'retread',
    v2: 'retread',
    v3: 'retread',
    meaning: 'lại giẫm/đạp lên',
    ipa: '/ˌriːˈtred/ - /ˌriːˈtred/ - /ˌriːˈtred/'
  },
  {
    v1: 'retrofit',
    v2: 'retrofitted',
    v3: 'retrofitted',
    v2_alt: ['retrofit'],
    v3_alt: ['retrofit'],
    meaning: 'trang bị thêm những bộ phận mới',
    ipa: '/ˈret.roʊ.fɪt/ - /ˈret.roʊ.fɪtɪd/ - /ˈret.roʊ.fɪtɪd/'
  },
  {
    v1: 'rewake',
    v2: 'rewoke',
    v3: 'rewaken',
    v2_alt: ['rewaked'],
    v3_alt: ['rewaked'],
    meaning: 'đánh thức lại',
    ipa: '/ˌriːˈweɪk/ - /ˌriːˈwoʊk/ - /ˌriːˈweɪkən/'
  },
  {
    v1: 'rewear',
    v2: 'rewore',
    v3: 'reworn',
    meaning: 'mặc lại',
    ipa: '/ˌriːˈweər/ - /ˌriːˈwɔːr/ - /ˌriːˈwɔːrn/'
  },
  {
    v1: 'reweave',
    v2: 'rewove',
    v3: 'rewove',
    v2_alt: ['reweaved'],
    v3_alt: ['reweaved'],
    meaning: 'dệt lại',
    ipa: '/ˌriːˈwiːv/ - /ˌriːˈwoʊv/ - /ˌriːˈwoʊv/'
  },

  // Day 50 (rewed, rewet, rewin, rewind, rewrite)
  {
    v1: 'rewed',
    v2: 'rewed',
    v3: 'rewed',
    v2_alt: ['rewedded'],
    v3_alt: ['rewedded'],
    meaning: 'kết hôn lại',
    ipa: '/ˌriːˈwed/ - /ˌriːˈwed/ - /ˌriːˈwed/'
  },
  {
    v1: 'rewet',
    v2: 'rewet',
    v3: 'rewet',
    v2_alt: ['rewetted'],
    v3_alt: ['rewetted'],
    meaning: 'làm ướt lại',
    ipa: '/ˌriːˈwet/ - /ˌriːˈwet/ - /ˌriːˈwet/'
  },
  {
    v1: 'rewin',
    v2: 'rewon',
    v3: 'rewon',
    meaning: 'thắng lại, giành lại',
    ipa: '/ˌriːˈwɪn/ - /ˌriːˈwʌn/ - /ˌriːˈwʌn/'
  },
  {
    v1: 'rewind',
    v2: 'rewound',
    v3: 'rewound',
    meaning: 'cuốn lại, lên dây lại',
    ipa: '/ˌriːˈwaɪnd/ - /ˌriːˈwaʊnd/ - /ˌriːˈwaʊnd/'
  },
  {
    v1: 'rewrite',
    v2: 'rewrote',
    v3: 'rewritten',
    meaning: 'viết lại',
    ipa: '/ˌriːˈraɪt/ - /ˌriːˈroʊt/ - /ˌriːˈrɪtn/'
  },

  // Day 51 (rid, ride, ring, rise, roughcast)
  {
    v1: 'rid',
    v2: 'rid',
    v3: 'rid',
    meaning: 'giải thoát, loại bỏ',
    ipa: '/rɪd/ - /rɪd/ - /rɪd/'
  },
  {
    v1: 'ride',
    v2: 'rode',
    v3: 'ridden',
    meaning: 'cưỡi (ngựa/xe)',
    ipa: '/raɪd/ - /roʊd/ - /ˈrɪdn/'
  },
  {
    v1: 'ring',
    v2: 'rang',
    v3: 'rung',
    meaning: 'rung chuông, reo',
    ipa: '/rɪŋ/ - /ræŋ/ - /rʌŋ/'
  },
  {
    v1: 'rise',
    v2: 'rose',
    v3: 'risen',
    meaning: 'đứng dậy, mọc lên',
    ipa: '/raɪz/ - /roʊz/ - /ˈrɪzn/'
  },
  {
    v1: 'roughcast',
    v2: 'roughcast',
    v3: 'roughcast',
    meaning: 'tạo hình phỏng chừng',
    ipa: '/ˈrʌf.kæst/ - /ˈrʌf.kæst/ - /ˈrʌf.kæst/'
  },

  // Day 52 (run, sand-cast, saw, say, see)
  {
    v1: 'run',
    v2: 'ran',
    v3: 'run',
    meaning: 'chạy',
    ipa: '/rʌn/ - /ræn/ - /rʌn/'
  },
  {
    v1: 'sand-cast',
    v2: 'sand-cast',
    v3: 'sand-cast',
    meaning: 'đúc bằng khuôn cát',
    ipa: '/ˈsænd.kæst/ - /ˈsænd.kæst/ - /ˈsænd.kæst/'
  },
  {
    v1: 'saw',
    v2: 'sawed',
    v3: 'sawn',
    meaning: 'cưa gỗ',
    ipa: '/sɔː/ - /sɔːd/ - /sɔːn/'
  },
  {
    v1: 'say',
    v2: 'said',
    v3: 'said',
    meaning: 'nói, bảo',
    ipa: '/seɪ/ - /sed/ - /sed/'
  },
  {
    v1: 'see',
    v2: 'saw',
    v3: 'seen',
    meaning: 'nhìn thấy, trông thấy',
    ipa: '/siː/ - /sɔː/ - /siːn/'
  },

  // Day 53 (seek, sell, send, set, sew)
  {
    v1: 'seek',
    v2: 'sought',
    v3: 'sought',
    meaning: 'tìm kiếm, mưu cầu',
    ipa: '/siːk/ - /sɔːt/ - /sɔːt/'
  },
  {
    v1: 'sell',
    v2: 'sold',
    v3: 'sold',
    meaning: 'bán',
    ipa: '/sel/ - /soʊld/ - /soʊld/'
  },
  {
    v1: 'send',
    v2: 'sent',
    v3: 'sent',
    meaning: 'gửi đi',
    ipa: '/send/ - /sent/ - /sent/'
  },
  {
    v1: 'set',
    v2: 'set',
    v3: 'set',
    meaning: 'đặt, thiết lập',
    ipa: '/set/ - /set/ - /set/'
  },
  {
    v1: 'sew',
    v2: 'sewed',
    v3: 'sewn',
    v3_alt: ['sewed'],
    meaning: 'may vá, khâu',
    ipa: '/soʊ/ - /soʊd/ - /soʊn/'
  },

  // Day 54 (shake, shave, shear, shed, shine)
  {
    v1: 'shake',
    v2: 'shook',
    v3: 'shaken',
    meaning: 'lay, lắc, rung',
    ipa: '/ʃeɪk/ - /ʃʊk/ - /ˈʃeɪkən/'
  },
  {
    v1: 'shave',
    v2: 'shaved',
    v3: 'shaved',
    v3_alt: ['shaven'],
    meaning: 'cạo (râu, mặt)',
    ipa: '/ʃeɪv/ - /ʃeɪvd/ - /ʃeɪvd/'
  },
  {
    v1: 'shear',
    v2: 'sheared',
    v3: 'shorn',
    meaning: 'xén lông (cừu)',
    ipa: '/ʃɪər/ - /ʃɪərd/ - /ʃɔːrn/'
  },
  {
    v1: 'shed',
    v2: 'shed',
    v3: 'shed',
    meaning: 'rơi, rụng (lá), trút bỏ',
    ipa: '/ʃed/ - /ʃed/ - /ʃed/'
  },
  {
    v1: 'shine',
    v2: 'shone',
    v3: 'shone',
    meaning: 'chiếu sáng, tỏa sáng',
    ipa: '/ʃaɪn/ - /ʃɒn/ - /ʃɒn/'
  },

  // Day 55 (shit, shoot, show, shrink, shut)
  {
    v1: 'shit',
    v2: 'shit',
    v3: 'shit',
    v2_alt: ['shat', 'shitted'],
    v3_alt: ['shat', 'shitted'],
    meaning: 'đi đại tiện',
    ipa: '/ʃɪt/ - /ʃɪt/ - /ʃɪt/'
  },
  {
    v1: 'shoot',
    v2: 'shot',
    v3: 'shot',
    meaning: 'bắn',
    ipa: '/ʃuːt/ - /ʃɒt/ - /ʃɒt/'
  },
  {
    v1: 'show',
    v2: 'showed',
    v3: 'shown',
    v3_alt: ['showed'],
    meaning: 'cho xem, trình diễn',
    ipa: '/ʃoʊ/ - /ʃoʊd/ - /ʃoʊn/'
  },
  {
    v1: 'shrink',
    v2: 'shrank',
    v3: 'shrunk',
    meaning: 'co rút, thu nhỏ',
    ipa: '/ʃrɪŋk/ - /ʃræŋk/ - /ʃrʌŋk/'
  },
  {
    v1: 'shut',
    v2: 'shut',
    v3: 'shut',
    meaning: 'đóng lại, khép lại',
    ipa: '/ʃʌt/ - /ʃʌt/ - /ʃʌt/'
  },

  // Day 56 (sight-read, sing, sink, sit, slay)
  {
    v1: 'sight-read',
    v2: 'sight-read',
    v3: 'sight-read',
    meaning: 'chơi/hát mà không cần nghiên cứu trước',
    ipa: '/ˈsaɪt.riːd/ - /ˈsaɪt.red/ - /ˈsaɪt.red/'
  },
  {
    v1: 'sing',
    v2: 'sang',
    v3: 'sung',
    meaning: 'ca hát',
    ipa: '/sɪŋ/ - /sæŋ/ - /sʌŋ/'
  },
  {
    v1: 'sink',
    v2: 'sank',
    v3: 'sunk',
    meaning: 'chìm, lặn',
    ipa: '/sɪŋk/ - /sæŋk/ - /sʌŋk/'
  },
  {
    v1: 'sit',
    v2: 'sat',
    v3: 'sat',
    meaning: 'ngồi',
    ipa: '/sɪt/ - /sæt/ - /sæt/'
  },
  {
    v1: 'slay',
    v2: 'slew',
    v3: 'slain',
    meaning: 'sát hại, giết hại',
    ipa: '/sleɪ/ - /sluː/ - /sleɪn/'
  },

  // Day 57 (sleep, slide, sling, slink, slit)
  {
    v1: 'sleep',
    v2: 'slept',
    v3: 'slept',
    meaning: 'ngủ',
    ipa: '/sliːp/ - /slept/ - /slept/'
  },
  {
    v1: 'slide',
    v2: 'slid',
    v3: 'slid',
    meaning: 'trượt, lướt nhẹ',
    ipa: '/slaɪd/ - /slɪd/ - /slɪd/'
  },
  {
    v1: 'sling',
    v2: 'slung',
    v3: 'slung',
    meaning: 'ném mạnh, quăng dây',
    ipa: '/slɪŋ/ - /slʌŋ/ - /slʌŋ/'
  },
  {
    v1: 'slink',
    v2: 'slunk',
    v3: 'slunk',
    meaning: 'lẻn đi, lủi đi',
    ipa: '/slɪŋk/ - /slʌŋk/ - /slʌŋk/'
  },
  {
    v1: 'slit',
    v2: 'slit',
    v3: 'slit',
    meaning: 'rạch, khứa, xẻ',
    ipa: '/slɪt/ - /slɪt/ - /slɪt/'
  },

  // Day 58 (smell, smite, sow, sneak, speak)
  {
    v1: 'smell',
    v2: 'smelt',
    v3: 'smelt',
    meaning: 'ngửi, bốc mùi',
    ipa: '/smel/ - /smelt/ - /smelt/'
  },
  {
    v1: 'smite',
    v2: 'smote',
    v3: 'smitten',
    meaning: 'đập mạnh, đánh gục',
    ipa: '/smaɪt/ - /smoʊt/ - /ˈsmɪtn/'
  },
  {
    v1: 'sow',
    v2: 'sowed',
    v3: 'sown',
    v3_alt: ['sowed'],
    meaning: 'gieo; rải hạt',
    ipa: '/soʊ/ - /soʊd/ - /soʊn/'
  },
  {
    v1: 'sneak',
    v2: 'sneaked',
    v3: 'sneaked',
    v2_alt: ['snuck'],
    v3_alt: ['snuck'],
    meaning: 'trốn, lén lút',
    ipa: '/sniːk/ - /sniːkt/ - /sniːkt/'
  },
  {
    v1: 'speak',
    v2: 'spoke',
    v3: 'spoken',
    meaning: 'nói, phát biểu',
    ipa: '/spiːk/ - /spoʊk/ - /ˈspoʊkən/'
  },

  // Day 59 (speed, spell, spend, spill, spin)
  {
    v1: 'speed',
    v2: 'sped',
    v3: 'sped',
    v2_alt: ['speeded'],
    v3_alt: ['speeded'],
    meaning: 'chạy vụt, tăng tốc',
    ipa: '/spiːd/ - /sped/ - /sped/'
  },
  {
    v1: 'spell',
    v2: 'spelt',
    v3: 'spelt',
    v2_alt: ['spelled'],
    v3_alt: ['spelled'],
    meaning: 'đánh vần',
    ipa: '/spel/ - /spelt/ - /spelt/'
  },
  {
    v1: 'spend',
    v2: 'spent',
    v3: 'spent',
    meaning: 'tiêu xài, dành (thời gian)',
    ipa: '/spend/ - /spent/ - /spent/'
  },
  {
    v1: 'spill',
    v2: 'spilt',
    v3: 'spilt',
    v2_alt: ['spilled'],
    v3_alt: ['spilled'],
    meaning: 'tràn, đổ ra ngoài',
    ipa: '/spɪl/ - /spɪlt/ - /spɪlt/'
  },
  {
    v1: 'spin',
    v2: 'spun',
    v3: 'spun',
    v2_alt: ['span'],
    meaning: 'quay sợi, xoay tròn',
    ipa: '/spɪn/ - /spʌn/ - /spʌn/'
  },

  // Day 60 (spoil, spread, stand, steal, stick)
  {
    v1: 'spoil',
    v2: 'spoilt',
    v3: 'spoilt',
    v2_alt: ['spoiled'],
    v3_alt: ['spoiled'],
    meaning: 'làm hỏng, làm hư',
    ipa: '/spɔɪl/ - /spɔɪlt/ - /spɔɪlt/'
  },
  {
    v1: 'spread',
    v2: 'spread',
    v3: 'spread',
    meaning: 'lan truyền, trải rộng',
    ipa: '/spred/ - /spred/ - /spred/'
  },
  {
    v1: 'stand',
    v2: 'stood',
    v3: 'stood',
    meaning: 'đứng, chịu đựng',
    ipa: '/stænd/ - /stʊd/ - /stʊd/'
  },
  {
    v1: 'steal',
    v2: 'stole',
    v3: 'stolen',
    meaning: 'đánh cắp, trộm',
    ipa: '/stiːl/ - /stoʊl/ - /ˈstoʊlən/'
  },
  {
    v1: 'stick',
    v2: 'stuck',
    v3: 'stuck',
    meaning: 'ghim vào, đính, dán chặt',
    ipa: '/stɪk/ - /stʌk/ - /stʌk/'
  },

  // Day 61 (sting, stink, stride, strike, string)
  {
    v1: 'sting',
    v2: 'stung',
    v3: 'stung',
    meaning: 'châm, chích, đốt',
    ipa: '/stɪŋ/ - /stʌŋ/ - /stʌŋ/'
  },
  {
    v1: 'stink',
    v2: 'stank',
    v3: 'stunk',
    v2_alt: ['stunk'],
    meaning: 'bốc mùi hôi',
    ipa: '/stɪŋk/ - /stæŋk/ - /stʌŋk/'
  },
  {
    v1: 'stride',
    v2: 'strode',
    v3: 'stridden',
    meaning: 'bước sải, đi từng bước dài',
    ipa: '/straɪd/ - /stroʊd/ - /ˈstrɪdn/'
  },
  {
    v1: 'strike',
    v2: 'struck',
    v3: 'struck',
    meaning: 'đánh đập, đình công',
    ipa: '/straɪk/ - /strʌk/ - /strʌk/'
  },
  {
    v1: 'string',
    v2: 'strung',
    v3: 'strung',
    meaning: 'gắn dây vào, xâu chuỗi',
    ipa: '/strɪŋ/ - /strʌŋ/ - /strʌŋ/'
  },

  // Day 62 (sunburn, swear, sweat, sweep, swell)
  {
    v1: 'sunburn',
    v2: 'sunburned',
    v3: 'sunburned',
    v2_alt: ['sunburnt'],
    v3_alt: ['sunburnt'],
    meaning: 'cháy nắng',
    ipa: '/ˈsʌn.bɜːrn/ - /ˈsʌn.bɜːrnd/ - /ˈsʌn.bɜːrnd/'
  },
  {
    v1: 'swear',
    v2: 'swore',
    v3: 'sworn',
    meaning: 'tuyên thệ, thề thốt',
    ipa: '/sweər/ - /swɔːr/ - /swɔːrn/'
  },
  {
    v1: 'sweat',
    v2: 'sweat',
    v3: 'sweat',
    v2_alt: ['sweated'],
    v3_alt: ['sweated'],
    meaning: 'đổ mồ hôi',
    ipa: '/swet/ - /swet/ - /swet/'
  },
  {
    v1: 'sweep',
    v2: 'swept',
    v3: 'swept',
    meaning: 'quét nhà, quét dọn',
    ipa: '/swiːp/ - /swept/ - /swept/'
  },
  {
    v1: 'swell',
    v2: 'swelled',
    v3: 'swollen',
    v3_alt: ['swelled'],
    meaning: 'phồng, sưng to',
    ipa: '/swel/ - /sweld/ - /ˈswoʊlən/'
  },

  // Day 63 (swim, swing, take, teach, tear)
  {
    v1: 'swim',
    v2: 'swam',
    v3: 'swum',
    meaning: 'bơi lội',
    ipa: '/swɪm/ - /swæm/ - /swʌm/'
  },
  {
    v1: 'swing',
    v2: 'swung',
    v3: 'swung',
    meaning: 'đong đưa, lắc lư',
    ipa: '/swɪŋ/ - /swʌŋ/ - /swʌŋ/'
  },
  {
    v1: 'take',
    v2: 'took',
    v3: 'taken',
    meaning: 'cầm, lấy, đưa đón',
    ipa: '/teɪk/ - /tʊk/ - /ˈteɪkən/'
  },
  {
    v1: 'teach',
    v2: 'taught',
    v3: 'taught',
    meaning: 'dạy, giảng dạy',
    ipa: '/tiːtʃ/ - /tɔːt/ - /tɔːt/'
  },
  {
    v1: 'tear',
    v2: 'tore',
    v3: 'torn',
    meaning: 'xé, rách',
    ipa: '/teər/ - /tɔːr/ - /tɔːrn/'
  },

  // Day 64 (telecast, tell, think, throw, thrust)
  {
    v1: 'telecast',
    v2: 'telecast',
    v3: 'telecast',
    meaning: 'phát đi bằng truyền hình',
    ipa: '/ˈtel.ɪ.kæst/ - /ˈtel.ɪ.kæst/ - /ˈtel.ɪ.kæst/'
  },
  {
    v1: 'tell',
    v2: 'told',
    v3: 'told',
    meaning: 'kể, bảo, nói cho biết',
    ipa: '/tel/ - /toʊld/ - /toʊld/'
  },
  {
    v1: 'think',
    v2: 'thought',
    v3: 'thought',
    meaning: 'suy nghĩ, ngẫm nghĩ',
    ipa: '/θɪŋk/ - /θɔːt/ - /θɔːt/'
  },
  {
    v1: 'throw',
    v2: 'threw',
    v3: 'thrown',
    meaning: 'ném, liệng, quăng',
    ipa: '/θroʊ/ - /θruː/ - /θroʊn/'
  },
  {
    v1: 'thrust',
    v2: 'thrust',
    v3: 'thrust',
    meaning: 'thọc, nhấn, đẩy mạnh',
    ipa: '/θrʌst/ - /θrʌst/ - /θrʌst/'
  },

  // Day 65 (tread, typewrite, unbend, unbind, unclothe)
  {
    v1: 'tread',
    v2: 'trod',
    v3: 'trodden',
    v3_alt: ['trod'],
    meaning: 'giẫm, đạp lên',
    ipa: '/tred/ - /trɒd/ - /ˈtrɒdn/'
  },
  {
    v1: 'typewrite',
    v2: 'typewrote',
    v3: 'typewritten',
    meaning: 'đánh máy',
    ipa: '/ˈtaɪp.raɪt/ - /ˈtaɪp.roʊt/ - /ˈtaɪp.rɪtn/'
  },
  {
    v1: 'unbend',
    v2: 'unbent',
    v3: 'unbent',
    meaning: 'làm thẳng lại, thư giãn',
    ipa: '/ʌnˈbend/ - /ʌnˈbent/ - /ʌnˈbent/'
  },
  {
    v1: 'unbind',
    v2: 'unbound',
    v3: 'unbound',
    meaning: 'mở, tháo ra, cởi trói',
    ipa: '/ʌnˈbaɪnd/ - /ʌnˈbaʊnd/ - /ʌnˈbaʊnd/'
  },
  {
    v1: 'unclothe',
    v2: 'unclothed',
    v3: 'unclothed',
    v2_alt: ['unclad'],
    v3_alt: ['unclad'],
    meaning: 'cởi áo, lột trần',
    ipa: '/ʌnˈkloʊð/ - /ʌnˈkloʊðd/ - /ʌnˈkloʊðd/'
  },

  // Day 66 (undercut, underfeed, undergo, underlie, underpay)
  {
    v1: 'undercut',
    v2: 'undercut',
    v3: 'undercut',
    meaning: 'ra giá rẻ hơn, cắt xén',
    ipa: '/ˌʌn.dəˈkʌt/ - /ˌʌn.dəˈkʌt/ - /ˌʌn.dəˈkʌt/'
  },
  {
    v1: 'underfeed',
    v2: 'underfed',
    v3: 'underfed',
    meaning: 'cho ăn đói, thiếu ăn',
    ipa: '/ˌʌn.dəˈfiːd/ - /ˌʌn.dəˈfed/ - /ˌʌn.dəˈfed/'
  },
  {
    v1: 'undergo',
    v2: 'underwent',
    v3: 'undergone',
    meaning: 'trải qua, chịu đựng',
    ipa: '/ˌʌn.dəˈɡoʊ/ - /ˌʌn.dəˈwent/ - /ˌʌn.dəˈɡɒn/'
  },
  {
    v1: 'underlie',
    v2: 'underlay',
    v3: 'underlain',
    meaning: 'nằm dưới, làm nền tảng cho',
    ipa: '/ˌʌn.dəˈlaɪ/ - /ˌʌn.dəˈleɪ/ - /ˌʌn.dəˈleɪn/'
  },
  {
    v1: 'underpay',
    v2: 'underpaid',
    v3: 'underpaid',
    meaning: 'trả lương thấp',
    ipa: '/ˌʌn.dəˈpeɪ/ - /ˌʌn.dəˈpeɪd/ - /ˌʌn.dəˈpeɪd/'
  },

  // Day 67 (undersell, understand, undertake, underwrite, undo)
  {
    v1: 'undersell',
    v2: 'undersold',
    v3: 'undersold',
    meaning: 'bán rẻ hơn đối thủ',
    ipa: '/ˌʌn.dəˈsel/ - /ˌʌn.dəˈsoʊld/ - /ˌʌn.dəˈsoʊld/'
  },
  {
    v1: 'understand',
    v2: 'understood',
    v3: 'understood',
    meaning: 'hiểu, hiểu rõ',
    ipa: '/ˌʌn.dəˈstænd/ - /ˌʌn.dəˈstʊd/ - /ˌʌn.dəˈstʊd/'
  },
  {
    v1: 'undertake',
    v2: 'undertook',
    v3: 'undertaken',
    meaning: 'đảm nhận, cam kết thực hiện',
    ipa: '/ˌʌn.dəˈteɪk/ - /ˌʌn.dəˈtʊk/ - /ˌʌn.dəˈteɪkən/'
  },
  {
    v1: 'underwrite',
    v2: 'underwrote',
    v3: 'underwritten',
    meaning: 'bảo hiểm, bảo lãnh tài chính',
    ipa: '/ˌʌn.dəˈraɪt/ - /ˌʌn.dəˈroʊt/ - /ˌʌn.dəˈrɪtn/'
  },
  {
    v1: 'undo',
    v2: 'undid',
    v3: 'undid',
    meaning: 'tháo ra, hủy bỏ, hoàn tác',
    ipa: '/ʌnˈduː/ - /ʌnˈdɪd/ - /ʌnˈdɪd/'
  },

  // Day 68 (unfreeze, unhang, unhide, unlearn, unspin)
  {
    v1: 'unfreeze',
    v2: 'unfroze',
    v3: 'unfrozen',
    meaning: 'làm tan đông, gỡ đóng băng',
    ipa: '/ʌnˈfriːz/ - /ʌnˈfroʊz/ - /ʌnˈfroʊzn/'
  },
  {
    v1: 'unhang',
    v2: 'unhung',
    v3: 'unhung',
    meaning: 'hạ xuống, bỏ xuống',
    ipa: '/ʌnˈhæŋ/ - /ʌnˈhʌŋ/ - /ʌnˈhʌŋ/'
  },
  {
    v1: 'unhide',
    v2: 'unhid',
    v3: 'unhidden',
    meaning: 'hiển thị, không ẩn',
    ipa: '/ʌnˈhaɪd/ - /ʌnˈhɪd/ - /ʌnˈhɪdn/'
  },
  {
    v1: 'unlearn',
    v2: 'unlearned',
    v3: 'unlearned',
    v2_alt: ['unlearnt'],
    v3_alt: ['unlearnt'],
    meaning: 'gạt bỏ, quên đi những gì đã học',
    ipa: '/ʌnˈlɜːrn/ - /ʌnˈlɜːrnd/ - /ʌnˈlɜːrnd/'
  },
  {
    v1: 'unspin',
    v2: 'unspun',
    v3: 'unspun',
    meaning: 'quay ngược lại',
    ipa: '/ʌnˈspɪn/ - /ʌnˈspʌn/ - /ʌnˈspʌn/'
  },

  // Day 69 (unwind, uphold, upset, wake, waylay)
  {
    v1: 'unwind',
    v2: 'unwound',
    v3: 'unwound',
    meaning: 'tháo ra, thư giãn xả hơi',
    ipa: '/ʌnˈwaɪnd/ - /ʌnˈwaʊnd/ - /ʌnˈwaʊnd/'
  },
  {
    v1: 'uphold',
    v2: 'upheld',
    v3: 'upheld',
    meaning: 'ủng hộ, giữ gìn phán quyết',
    ipa: '/ʌpˈhoʊld/ - /ʌpˈheld/ - /ʌpˈheld/'
  },
  {
    v1: 'upset',
    v2: 'upset',
    v3: 'upset',
    meaning: 'đánh đổ, lật đổ, làm buồn phiền',
    ipa: '/ʌpˈset/ - /ʌpˈset/ - /ʌpˈset/'
  },
  {
    v1: 'wake',
    v2: 'woke',
    v3: 'woken',
    v2_alt: ['wake'],
    v3_alt: ['waked'],
    meaning: 'thức giấc, đánh thức',
    ipa: '/weɪk/ - /woʊk/ - /ˈwoʊkən/'
  },
  {
    v1: 'waylay',
    v2: 'waylaid',
    v3: 'waylaid',
    meaning: 'mai phục, chặn đường',
    ipa: '/ˈweɪ.leɪ/ - /ˈweɪ.leɪd/ - /ˈweɪ.leɪd/'
  },

  // Day 70 (wear, weave, wed, weep, wet)
  {
    v1: 'wear',
    v2: 'wore',
    v3: 'worn',
    meaning: 'mặc (áo), đeo, mang',
    ipa: '/weər/ - /wɔːr/ - /wɔːrn/'
  },
  {
    v1: 'weave',
    v2: 'wove',
    v3: 'woven',
    v2_alt: ['weaved'],
    v3_alt: ['weaved'],
    meaning: 'dệt (vải)',
    ipa: '/wiːv/ - /woʊv/ - /ˈwoʊvən/'
  },
  {
    v1: 'wed',
    v2: 'wed',
    v3: 'wed',
    v2_alt: ['wedded'],
    v3_alt: ['wedded'],
    meaning: 'kết hôn, cưới',
    ipa: '/wed/ - /wed/ - /wed/'
  },
  {
    v1: 'weep',
    v2: 'wept',
    v3: 'wept',
    meaning: 'khóc than',
    ipa: '/wiːp/ - /wept/ - /wept/'
  },
  {
    v1: 'wet',
    v2: 'wet',
    v3: 'wet',
    v2_alt: ['wetted'],
    v3_alt: ['wetted'],
    meaning: 'làm ướt',
    ipa: '/wet/ - /wet/ - /wet/'
  },

  // Day 71 (win, wind, withdraw, withhold, withstand)
  {
    v1: 'win',
    v2: 'won',
    v3: 'won',
    meaning: 'thắng, chiến thắng',
    ipa: '/wɪn/ - /wʌn/ - /wʌn/'
  },
  {
    v1: 'wind',
    v2: 'wound',
    v3: 'wound',
    meaning: 'quấn, lượn quanh',
    ipa: '/waɪnd/ - /waʊnd/ - /waʊnd/'
  },
  {
    v1: 'withdraw',
    v2: 'withdrew',
    v3: 'withdrawn',
    meaning: 'rút lui, rút tiền',
    ipa: '/wɪðˈdrɔː/ - /wɪðˈdruː/ - /wɪðˈdrɔːn/'
  },
  {
    v1: 'withhold',
    v2: 'withheld',
    v3: 'withheld',
    meaning: 'từ khước, giấu kín',
    ipa: '/wɪðˈhoʊld/ - /wɪðˈheld/ - /wɪðˈheld/'
  },
  {
    v1: 'withstand',
    v2: 'withstood',
    v3: 'withstood',
    meaning: 'cầm cự, chống cự',
    ipa: '/wɪðˈstænd/ - /wɪðˈstʊd/ - /wɪðˈstʊd/'
  },

  // Day 72 (work, wring, write) + extra essential irregular verbs
  {
    v1: 'work',
    v2: 'worked',
    v3: 'worked',
    meaning: 'làm việc, rèn đất',
    ipa: '/wɜːrk/ - /wɜːrkt/ - /wɜːrkt/'
  },
  {
    v1: 'wring',
    v2: 'wrung',
    v3: 'wrung',
    meaning: 'vặn, siết chặt, vắt ráo',
    ipa: '/rɪŋ/ - /rʌŋ/ - /rʌŋ/'
  },
  {
    v1: 'write',
    v2: 'wrote',
    v3: 'written',
    meaning: 'viết',
    ipa: '/raɪt/ - /roʊt/ - /ˈrɪtn/'
  },
  {
    v1: 'forget',
    v2: 'forgot',
    v3: 'forgotten',
    meaning: 'quên, gạt bỏ',
    ipa: '/fərˈɡet/ - /fərˈɡɒt/ - /fərˈɡɒtn/'
  },
  {
    v1: 'forgive',
    v2: 'forgave',
    v3: 'forgiven',
    meaning: 'tha thứ, bỏ qua',
    ipa: '/fərˈɡɪv/ - /fərˈɡeɪv/ - /fərˈɡɪvn/'
  }
];

// Map into IrregularVerb with ID and Day calculated
export const IRREGULAR_VERBS: IrregularVerb[] = RAW_VERBS.map((verb, index) => ({
  ...verb,
  id: index + 1,
  day: Math.floor(index / 5) + 1
}));

export const TOTAL_VERBS = IRREGULAR_VERBS.length;
export const TOTAL_DAYS = Math.ceil(TOTAL_VERBS / 5);

export function getVerbsByDay(day: number): IrregularVerb[] {
  return IRREGULAR_VERBS.filter(v => v.day === day);
}

export function getVerbById(id: number): IrregularVerb | undefined {
  return IRREGULAR_VERBS.find(v => v.id === id);
}
