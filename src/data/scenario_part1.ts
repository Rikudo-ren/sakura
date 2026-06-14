import { Scene } from '../types';

export const scenarioPart1: Record<string, Scene> = {
  // ===== TITLE SCREEN =====
  "title": {
    id: "title",
    type: "narration",
    text: "✝本質✝恋愛学ビジュアルノベル\n『シュレディンガーの恋 ——観測されなかった波動関数』",
    bg: "title_bg",
    bgm: "title"
  },

  // ===== PROLOGUE: 消しゴムが落ちた日 =====
  "prologue_001": {
    id: "prologue_001",
    type: "narration",
    text: "図書室には午後の光が差し込んでいた。\n窓の外を見れば、南棟の桜並木が枯れ始めている。",
    bg: "library_afternoon",
    bgm: "library",
    next: "prologue_002"
  },
  "prologue_002": {
    id: "prologue_002",
    type: "narration",
    text: "僕——櫻優は、恋愛学の研究ノートを広げていた。\n恋愛学。人間の感情的結合の構造を研究する学問。",
    bg: "library_afternoon",
    next: "prologue_003"
  },
  "prologue_003": {
    id: "prologue_003",
    type: "narration",
    text: "僕が独自に構築しつつある、まだ誰にも認められていない学問。\n研究ノートには「シュレディンガーの好意」「恋愛発生の第七法則」などと書かれている。そして、肝心のデータが一つもない。経験ゼロだから。",
    bg: "library_afternoon",
    next: "prologue_004"
  },
  "prologue_004": {
    id: "prologue_004",
    type: "narration",
    text: "そのとき。隣の席から、かすかな音がした。",
    bg: "library_afternoon",
    se: "item_drop",
    next: "prologue_005"
  },
  "prologue_005": {
    id: "prologue_005",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "normal",
    text: "あ——",
    bg: "library_afternoon",
    next: "prologue_006"
  },
  "prologue_006": {
    id: "prologue_006",
    type: "narration",
    text: "消しゴムが落ちていた。隣の席の、知らない女の子の。\n彼女はそれに気づかず、文庫本を読み続けている。",
    bg: "library_afternoon",
    next: "prologue_choice"
  },
  "prologue_choice": {
    id: "prologue_choice",
    type: "choice",
    text: "消しゴムをどうする？",
    bg: "library_afternoon",
    choices: [
      {
        text: "[拾って渡す]",
        next: "prologue_picked"
      }
    ]
  },
  "prologue_picked": {
    id: "prologue_picked",
    type: "narration",
    text: "拾った。渡した。それだけのことだった。",
    bg: "library_afternoon",
    se: "page_turn",
    next: "prologue_picked_ran"
  },
  "prologue_picked_ran": {
    id: "prologue_picked_ran",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "surprised",
    text: "あ、ありがとうございます",
    bg: "library_afternoon",
    next: "prologue_007"
  },
  "prologue_007": {
    id: "prologue_007",
    type: "narration",
    text: "彼女は少しだけ驚いた顔をして、それからまた本に戻った。\n僕は研究ノートに記録した。\n「消しゴム事象。軽微な接触が好意の種子になりうるか？ 要検証」\n……それが始まりだった。",
    bg: "library_afternoon",
    next: "ch1_001"
  },

  // ===== 第一章: シュレディンガーの好意、量子的に重ね合わさる =====
  "ch1_001": {
    id: "ch1_001",
    type: "narration",
    text: "【第一章】\n「シュレディンガーの好意、量子的に重ね合わさる」\n時期：高校二年・四月",
    bg: "classroom_morning",
    bgm: "classroom",
    next: "ch1_002"
  },
  "ch1_002": {
    id: "ch1_002",
    type: "narration",
    text: "二年のクラス替え。名簿に自分の名前を見つけた後、慎重に一行ずつ目を動かした。そして——",
    bg: "classroom_morning",
    se: "heartbeat",
    next: "ch1_003"
  },
  "ch1_003": {
    id: "ch1_003",
    type: "narration",
    text: "「内藤蘭」\n同じクラスになった。\n恋愛発生の第一法則——「近接性と反復接触が好意を生む」——が自分自身に適用されていることを、僕は認識した。",
    bg: "classroom_morning",
    next: "ch1_004"
  },
  "ch1_004": {
    id: "ch1_004",
    type: "narration",
    text: "問題は、一法則が発動した後どうすれば良いのかを、誰も——どの文献も——明確に教えてくれないことだ。",
    bg: "classroom_morning",
    next: "ch1_classroom"
  },
  "ch1_classroom": {
    id: "ch1_classroom",
    type: "dialogue",
    speaker: "三峰瑠衣",
    speakerKey: "mimine",
    expression: "normal",
    text: "ねえ、あんた櫻くんでしょ。去年理数科に通ってたっていう",
    bg: "classroom_morning",
    next: "ch1_005"
  },
  "ch1_005": {
    id: "ch1_005",
    type: "narration",
    text: "三峰瑠衣。同じクラスになった女子だ。どこかで見かけた気はする。元気のいい、直球の女子。",
    bg: "classroom_morning",
    next: "ch1_006"
  },
  "ch1_006": {
    id: "ch1_006",
    type: "dialogue",
    speaker: "櫻優",
    text: "はい。恋愛学の研究で——",
    bg: "classroom_morning",
    next: "ch1_mimine_ask"
  },
  "ch1_mimine_ask": {
    id: "ch1_mimine_ask",
    type: "dialogue",
    speaker: "三峰瑠衣",
    speakerKey: "mimine",
    expression: "sharp",
    text: "ちょっと待って。あんた、好きな子いる？",
    bg: "classroom_morning",
    next: "ch1_007"
  },
  "ch1_007": {
    id: "ch1_007",
    type: "narration",
    text: "唐突だった。",
    bg: "classroom_morning",
    next: "choice_a1"
  },
  "choice_a1": {
    id: "choice_a1",
    type: "choice",
    text: "三峰の質問にどう答える？",
    bg: "classroom_morning",
    choices: [
      {
        text: "A. 「……いません」（否定する）",
        next: "a1_route_a",
        flagChanges: { riron_izon: 1 }
      },
      {
        text: "B. 「定義によりますが……」（理論で逃げる）",
        next: "a1_route_b",
        flagChanges: { riron_izon: 2 }
      },
      {
        text: "C. 「……調査中です」（正直に近い答え）",
        next: "a1_route_c",
        flagChanges: { ran_koukan: 1 }
      }
    ]
  },

  // A1_ROUTE_A
  "a1_route_a": {
    id: "a1_route_a",
    type: "dialogue",
    speaker: "三峰瑠衣",
    speakerKey: "mimine",
    expression: "sharp",
    text: "嘘。今の一瞬で視線が左に動いた。嘘つくとき人間は利き手の反対側を見るのよ",
    bg: "classroom_morning",
    next: "a1_route_a_2"
  },
  "a1_route_a_2": {
    id: "a1_route_a_2",
    type: "dialogue",
    speaker: "櫻優",
    text: "それは俗説です。科学的根拠は——",
    bg: "classroom_morning",
    next: "a1_route_a_3"
  },
  "a1_route_a_3": {
    id: "a1_route_a_3",
    type: "dialogue",
    speaker: "三峰瑠衣",
    speakerKey: "mimine",
    expression: "sharp",
    text: "内藤さんでしょ",
    bg: "classroom_morning",
    se: "heartbeat",
    next: "a1_route_a_4"
  },
  "a1_route_a_4": {
    id: "a1_route_a_4",
    type: "narration",
    text: "凍った。",
    bg: "classroom_morning",
    next: "a1_route_a_5"
  },
  "a1_route_a_5": {
    id: "a1_route_a_5",
    type: "dialogue",
    speaker: "三峰瑠衣",
    speakerKey: "mimine",
    expression: "sharp",
    text: "席替えの表見たとき、内藤さんの名前のとこで目が止まってた。三秒くらい",
    bg: "classroom_morning",
    next: "a1_route_a_6"
  },
  "a1_route_a_6": {
    id: "a1_route_a_6",
    type: "dialogue",
    speaker: "櫻優",
    text: "……観察データとして有用な指摘ですが——",
    bg: "classroom_morning",
    next: "a1_route_a_7"
  },
  "a1_route_a_7": {
    id: "a1_route_a_7",
    type: "dialogue",
    speaker: "三峰瑠衣",
    speakerKey: "mimine",
    expression: "serious",
    text: "あんた、好きなんだよ。内藤さんのこと。理論とか研究とかじゃなくて",
    bg: "classroom_morning",
    next: "a1_merge"
  },

  // A1_ROUTE_B
  "a1_route_b": {
    id: "a1_route_b",
    type: "dialogue",
    speaker: "三峰瑠衣",
    speakerKey: "mimine",
    expression: "sharp",
    text: "定義って何。好きかどうかでしょ",
    bg: "classroom_morning",
    next: "a1_route_b_2"
  },
  "a1_route_b_2": {
    id: "a1_route_b_2",
    type: "dialogue",
    speaker: "櫻優",
    text: "好意とは観測されていない状態で量子的に重ね合わさっており——",
    bg: "classroom_morning",
    next: "a1_route_b_3"
  },
  "a1_route_b_3": {
    id: "a1_route_b_3",
    type: "dialogue",
    speaker: "三峰瑠衣",
    speakerKey: "mimine",
    expression: "sharp",
    text: "あんた何言ってるの",
    bg: "classroom_morning",
    next: "a1_route_b_4"
  },
  "a1_route_b_4": {
    id: "a1_route_b_4",
    type: "dialogue",
    speaker: "櫻優",
    text: "シュレディンガーの好意です。好意は観測された瞬間に確定し——",
    bg: "classroom_morning",
    next: "a1_route_b_5"
  },
  "a1_route_b_5": {
    id: "a1_route_b_5",
    type: "dialogue",
    speaker: "三峰瑠衣",
    speakerKey: "mimine",
    expression: "sharp",
    text: "……全然わかんない。でも内藤さんのこと好きでしょ。名簿見たとき顔変わってたから",
    bg: "classroom_morning",
    next: "a1_route_b_6"
  },
  "a1_route_b_6": {
    id: "a1_route_b_6",
    type: "narration",
    text: "三峰は鋭い。これは認めざるを得ない。",
    bg: "classroom_morning",
    next: "a1_merge"
  },

  // A1_ROUTE_C
  "a1_route_c": {
    id: "a1_route_c",
    type: "dialogue",
    speaker: "三峰瑠衣",
    speakerKey: "mimine",
    expression: "laugh",
    text: "調査中って、あんたは何者なの",
    bg: "classroom_morning",
    next: "a1_route_c_2"
  },
  "a1_route_c_2": {
    id: "a1_route_c_2",
    type: "dialogue",
    speaker: "櫻優",
    text: "恋愛学の研究者です",
    bg: "classroom_morning",
    next: "a1_route_c_3"
  },
  "a1_route_c_3": {
    id: "a1_route_c_3",
    type: "dialogue",
    speaker: "三峰瑠衣",
    speakerKey: "mimine",
    expression: "laugh",
    text: "……面白いね。恋愛を調査するの？",
    bg: "classroom_morning",
    next: "a1_route_c_4"
  },
  "a1_route_c_4": {
    id: "a1_route_c_4",
    type: "dialogue",
    speaker: "櫻優",
    text: "感情的結合の構造を解析します。ただ現在、当事者になってしまい——理論が機能しない状況です",
    bg: "classroom_morning",
    next: "a1_route_c_5"
  },
  "a1_route_c_5": {
    id: "a1_route_c_5",
    type: "dialogue",
    speaker: "三峰瑠衣",
    speakerKey: "mimine",
    expression: "laugh",
    text: "当事者って、内藤さんのことでしょ",
    bg: "classroom_morning",
    next: "a1_merge"
  },

  // A1_MERGE
  "a1_merge": {
    id: "a1_merge",
    type: "dialogue",
    speaker: "三峰瑠衣",
    speakerKey: "mimine",
    expression: "serious",
    text: "わかった。あたしが作戦立ててあげる",
    bg: "classroom_morning",
    next: "a1_merge_2"
  },
  "a1_merge_2": {
    id: "a1_merge_2",
    type: "narration",
    text: "彼女はA4のルーズリーフを取り出し、ペンを構えた。\n「櫻×内藤　作戦ノート」と書いた。大きく。",
    bg: "classroom_morning",
    next: "a1_merge_3"
  },
  "a1_merge_3": {
    id: "a1_merge_3",
    type: "dialogue",
    speaker: "櫻優",
    text: "……作戦？",
    bg: "classroom_morning",
    next: "a1_merge_4"
  },
  "a1_merge_4": {
    id: "a1_merge_4",
    type: "dialogue",
    speaker: "三峰瑠衣",
    speakerKey: "mimine",
    expression: "normal",
    text: "恋愛は作戦なの。理論じゃない",
    bg: "classroom_morning",
    next: "ch2_001"
  },

  // ===== 第二章: LINEアイコンと、猫と、距離の測り方 =====
  "ch2_001": {
    id: "ch2_001",
    type: "narration",
    text: "【第二章】\n「LINEアイコンと、猫と、距離の測り方」\n時期：高校二年・四月末〜五月",
    bg: "classroom_afternoon",
    bgm: "lunch",
    next: "ch2_002"
  },
  "ch2_002": {
    id: "ch2_002",
    type: "narration",
    text: "翌日。三峰から作戦ノートの一ページ目が示された。\n「作戦1：LINEのアイコンを変える」",
    bg: "classroom_afternoon",
    next: "ch2_003"
  },
  "ch2_003": {
    id: "ch2_003",
    type: "dialogue",
    speaker: "櫻優",
    text: "なぜアイコンを変えるんですか",
    bg: "classroom_afternoon",
    next: "ch2_004"
  },
  "ch2_004": {
    id: "ch2_004",
    type: "dialogue",
    speaker: "三峰瑠衣",
    speakerKey: "mimine",
    expression: "normal",
    text: "変えたら〈あ、変えたんだ〉って思うでしょ。それが会話のきっかけになるの",
    bg: "classroom_afternoon",
    next: "choice_b1"
  },
  "choice_b1": {
    id: "choice_b1",
    type: "choice",
    text: "LINEアイコン、何に変える？",
    bg: "classroom_afternoon",
    choices: [
      {
        text: "A. 「猫の画像にする」（三峰の言う通りにする）",
        next: "b1_route_a",
        flagChanges: { mimine_flag: 1 }
      },
      {
        text: "B. 「天文学の写真にする」（自分流でいく）",
        next: "b1_route_b",
        flagChanges: { ran_koukan: 2, flag_orion: true }
      },
      {
        text: "C. 「変えない」",
        next: "b1_route_c",
        flagChanges: { riron_izon: 1 }
      }
    ]
  },

  // B1_ROUTE_A
  "b1_route_a": {
    id: "b1_route_a",
    type: "narration",
    text: "三峰の言う通り、猫の画像に変えた。\n翌日。内藤から反応はなかった。\n翌々日も。翌々々日も。",
    bg: "classroom_afternoon",
    next: "b1_route_a_2"
  },
  "b1_route_a_2": {
    id: "b1_route_a_2",
    type: "dialogue",
    speaker: "三峰瑠衣",
    speakerKey: "mimine",
    expression: "normal",
    text: "まだ一日目だから",
    bg: "classroom_afternoon",
    next: "b1_route_a_3"
  },
  "b1_route_a_3": {
    id: "b1_route_a_3",
    type: "dialogue",
    speaker: "櫻優",
    text: "三日経ちました",
    bg: "classroom_afternoon",
    next: "b1_route_a_4"
  },
  "b1_route_a_4": {
    id: "b1_route_a_4",
    type: "dialogue",
    speaker: "三峰瑠衣",
    speakerKey: "mimine",
    expression: "laugh",
    text: "気長にいくの。恋愛は地質変動みたいなもんで、時間がかかるのよ",
    bg: "classroom_afternoon",
    next: "b1_route_a_5"
  },
  "b1_route_a_5": {
    id: "b1_route_a_5",
    type: "narration",
    text: "……地質変動。\n地理の授業で聞いた話と重なった。\n数億年かけて地面は変わる。恋愛も——数億年かかるのかもしれない。",
    bg: "classroom_afternoon",
    next: "b1_merge"
  },

  // B1_ROUTE_B
  "b1_route_b": {
    id: "b1_route_b",
    type: "narration",
    text: "三峰の提案は断り、自分の好きな天文学の写真にした。\nオリオン座。三つ星の間隔がわかるもの。\n\n【翌日。昼休み。】",
    bg: "classroom_afternoon",
    next: "b1_route_b_2"
  },
  "b1_route_b_2": {
    id: "b1_route_b_2",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "smile",
    text: "あの、アイコン変えましたよね",
    bg: "classroom_afternoon",
    next: "b1_route_b_3"
  },
  "b1_route_b_3": {
    id: "b1_route_b_3",
    type: "narration",
    text: "突然声をかけられた。",
    bg: "classroom_afternoon",
    next: "b1_route_b_4"
  },
  "b1_route_b_4": {
    id: "b1_route_b_4",
    type: "dialogue",
    speaker: "櫻優",
    text: "……はい",
    bg: "classroom_afternoon",
    next: "b1_route_b_5"
  },
  "b1_route_b_5": {
    id: "b1_route_b_5",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "normal",
    text: "オリオン座ですか？",
    bg: "classroom_afternoon",
    next: "b1_route_b_6"
  },
  "b1_route_b_6": {
    id: "b1_route_b_6",
    type: "dialogue",
    speaker: "櫻優",
    text: "そうです",
    bg: "classroom_afternoon",
    next: "b1_route_b_7"
  },
  "b1_route_b_7": {
    id: "b1_route_b_7",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "smile",
    text: "あの三つ星って、実際はバラバラの距離にある星なのに、地球から見ると並んで見えるんですよね。たまたま同じ方向にある",
    bg: "classroom_afternoon",
    next: "b1_route_b_8"
  },
  "b1_route_b_8": {
    id: "b1_route_b_8",
    type: "narration",
    text: "——知っている。\n知っているが、彼女の口からその言葉が出てくるとは思っていなかった。",
    bg: "classroom_afternoon",
    next: "b1_route_b_9"
  },
  "b1_route_b_9": {
    id: "b1_route_b_9",
    type: "dialogue",
    speaker: "内藤蘭",
    speakerKey: "ran",
    expression: "normal",
    text: "寺地星くんの動画で知ったんです。〈星座のパターンは人間が作り出したもの〉って",
    bg: "classroom_afternoon",
    next: "b1_route_b_10"
  },
  "b1_route_b_10": {
    id: "b1_route_b_10",
    type: "narration",
    text: "寺地先輩の本質配信。彼女は見ていた。それだけで——距離が縮んだ気がした。",
    bg: "classroom_afternoon",
    next: "b1_merge"
  },

  // B1_ROUTE_C
  "b1_route_c": {
    id: "b1_route_c",
    type: "narration",
    text: "変えなかった。\n理論上、アイコン変更が好意のシグナルとして認知される確率の計算が終わっていなかった。\n計算を終えたとき、三峰が「もう一週間経ってるじゃん」と言った。",
    bg: "classroom_afternoon",
    next: "b1_route_c_2"
  },
  "b1_route_c_2": {
    id: "b1_route_c_2",
    type: "dialogue",
    speaker: "三峰瑠衣",
    speakerKey: "mimine",
    expression: "sharp",
    text: "あんた計算してるより行動しなよ",
    bg: "classroom_afternoon",
    next: "b1_route_c_3"
  },
  "b1_route_c_3": {
    id: "b1_route_c_3",
    type: "dialogue",
    speaker: "櫻優",
    text: "行動する前に理論的裏付けが必要です。拙速は——",
    bg: "classroom_afternoon",
    next: "b1_route_c_4"
  },
  "b1_route_c_4": {
    id: "b1_route_c_4",
    type: "dialogue",
    speaker: "三峰瑠衣",
    speakerKey: "mimine",
    expression: "sharp",
    text: "理論の✝本質✝とやらを北棟のあの人たちに聞いてくれば？",
    bg: "classroom_afternoon",
    next: "b1_route_c_5"
  },
  "b1_route_c_5": {
    id: "b1_route_c_5",
    type: "narration",
    text: "……北棟。\n理数科の人間たちのところに、僕はまた向かうことになった。",
    bg: "classroom_afternoon",
    next: "b1_merge"
  },

  // B1_MERGE
  "b1_merge": {
    id: "b1_merge",
    type: "narration",
    text: "【北棟再訪——両馬と三重と、✝本質✝の話】\n\n南棟から長い廊下を渡り、理数科がある「北棟」にやってきた。",
    bg: "science_classroom",
    bgm: "honsitsu",
    next: "b1_merge_ryouma"
  },
  "b1_merge_ryouma": {
    id: "b1_merge_ryouma",
    type: "dialogue",
    speaker: "両馬二郎",
    speakerKey: "ryouma",
    expression: "normal",
    text: "あ、櫻。また来たじゃん。恋愛学どうなった？",
    bg: "science_classroom",
    next: "b1_merge_mie"
  },
  "b1_merge_mie": {
    id: "b1_merge_mie",
    type: "dialogue",
    speaker: "三重県臣",
    speakerKey: "mie",
    expression: "normal",
    text: "研究が進んでないから来るんだろ。当事者になって理論が壊れた話、この前言ってたよな",
    bg: "science_classroom",
    next: "b1_merge_3"
  },
  "b1_merge_3": {
    id: "b1_merge_3",
    type: "narration",
    text: "鋭い。三重先輩は何も見逃さない。",
    bg: "science_classroom",
    next: "b1_merge_4"
  },
  "b1_merge_4": {
    id: "b1_merge_4",
    type: "dialogue",
    speaker: "櫻優",
    text: "……進んでいません。理論の外に出てしまっています",
    bg: "science_classroom",
    next: "b1_merge_5"
  },
  "b1_merge_5": {
    id: "b1_merge_5",
    type: "dialogue",
    speaker: "両馬二郎",
    speakerKey: "ryouma",
    expression: "thinking",
    text: "当事者になった？ 誰か好きな人できたの？",
    bg: "science_classroom",
    next: "b1_merge_6"
  },
  "b1_merge_6": {
    id: "b1_merge_6",
    type: "dialogue",
    speaker: "三重県臣",
    speakerKey: "mie",
    expression: "normal",
    text: "聞くな。プライバシーだ",
    bg: "science_classroom",
    next: "b1_merge_7"
  },
  "b1_merge_7": {
    id: "b1_merge_7",
    type: "dialogue",
    speaker: "両馬二郎",
    speakerKey: "ryouma",
    expression: "excited",
    text: "いいじゃん。✝本質✝的に、恋愛の当事者になった研究者がいるって面白い",
    bg: "science_classroom",
    next: "choice_b2"
  },
  "choice_b2": {
    id: "choice_b2",
    type: "choice",
    text: "理数科の先輩たちに対してどう話す？",
    bg: "science_classroom",
    choices: [
      {
        text: "A. 「実は相談があります」（正直に話す）",
        next: "b2_route_a",
        flagChanges: { honsitsu_index: 1 }
      },
      {
        text: "B. 「理論的なアドバイスをお願いしたくて」（理論寄り）",
        next: "b2_route_b",
        flagChanges: { riron_izon: 1 }
      },
      {
        text: "C. 「……別に来ただけです」（話さない）",
        next: "b2_route_c",
        flagChanges: { mimine_flag: 1 }
      }
    ]
  },

  // B2_ROUTE_A
  "b2_route_a": {
    id: "b2_route_a",
    type: "dialogue",
    speaker: "櫻優",
    text: "実は……好きな人が、同じクラスになりました",
    bg: "science_classroom",
    next: "b2_route_a_2"
  },
  "b2_route_a_2": {
    id: "b2_route_a_2",
    type: "dialogue",
    speaker: "両馬二郎",
    speakerKey: "ryouma",
    expression: "excited",
    text: "それ✝本質✝じゃん！！",
    bg: "science_classroom",
    next: "b2_route_a_3"
  },
  "b2_route_a_3": {
    id: "b2_route_a_3",
    type: "dialogue",
    speaker: "三重県臣",
    speakerKey: "mie",
    expression: "ha",
    text: "何が✝本質✝なんだよ",
    bg: "science_classroom",
    next: "b2_route_a_rei"
  },
  "b2_route_a_rei": {
    id: "b2_route_a_rei",
    type: "dialogue",
    speaker: "数理零",
    speakerKey: "rei",
    expression: "normal",
    text: "あ、でも恋愛学の研究者が恋をしたのは確かに面白いね。研究者が研究対象の中心に入っちゃった状態だから、客観的な観察が理論上できなくなる",
    bg: "science_classroom",
    next: "b2_route_a_4"
  },
  "b2_route_a_4": {
    id: "b2_route_a_4",
    type: "narration",
    text: "……零先輩は正確だ。客観的な観察ができない。だから理論が壊れている。",
    bg: "science_classroom",
    next: "b2_route_a_5"
  },
  "b2_route_a_5": {
    id: "b2_route_a_5",
    type: "dialogue",
    speaker: "数理零",
    speakerKey: "rei",
    expression: "interested",
    text: "ちなみに——理論で処理しようとすること自体をやめたらどうかな",
    bg: "science_classroom",
    next: "b2_route_a_6"
  },
  "b2_route_a_6": {
    id: "b2_route_a_6",
    type: "dialogue",
    speaker: "櫻優",
    text: "やめたらどうなるんですか",
    bg: "science_classroom",
    next: "b2_route_a_7"
  },
  "b2_route_a_7": {
    id: "b2_route_a_7",
    type: "dialogue",
    speaker: "数理零",
    speakerKey: "rei",
    expression: "interested",
    text: "わかんない。でも面白いんじゃない？ 理論のない状態で恋をするの",
    bg: "science_classroom",
    next: "b2_merge"
  },

  // B2_ROUTE_B
  "b2_route_b": {
    id: "b2_route_b",
    type: "dialogue",
    speaker: "両馬二郎",
    speakerKey: "ryouma",
    expression: "thinking",
    text: "恋愛の理論的アドバイス……。✝本質✝的に言えば、理論は恋愛の地形図みたいなもんで、地形図より地面の方が正確なんだよ",
    bg: "science_classroom",
    next: "b2_route_b_2"
  },
  "b2_route_b_2": {
    id: "b2_route_b_2",
    type: "narration",
    text: "……意味がよくわからない。でも、なんとなく引っかかった。",
    bg: "science_classroom",
    next: "b2_route_b_3"
  },
  "b2_route_b_3": {
    id: "b2_route_b_3",
    type: "dialogue",
    speaker: "三重県臣",
    speakerKey: "mie",
    expression: "normal",
    text: "両馬の言ってることを翻訳すると、理論より実際に動け、ってことだ",
    bg: "science_classroom",
    next: "b2_route_b_4"
  },
  "b2_route_b_4": {
    id: "b2_route_b_4",
    type: "dialogue",
    speaker: "櫻優",
    text: "行動することが必要だと？",
    bg: "science_classroom",
    next: "b2_route_b_5"
  },
  "b2_route_b_5": {
    id: "b2_route_b_5",
    type: "dialogue",
    speaker: "三重県臣",
    speakerKey: "mie",
    expression: "normal",
    text: "……恋愛に完璧な理論はない。完璧な地形図がないのと同じで。近似値として動くしかないんじゃないか",
    bg: "science_classroom",
    next: "b2_route_b_6"
  },
  "b2_route_b_6": {
    id: "b2_route_b_6",
    type: "narration",
    text: "三重先輩は、冷笑しながらも正確なことを言う。",
    bg: "science_classroom",
    next: "b2_merge"
  },

  // B2_ROUTE_C
  "b2_route_c": {
    id: "b2_route_c",
    type: "narration",
    text: "何も言えなかった。理数科の教室の空気が、南棟とは違う。\n誰かが「は？」と言い、誰かが✝本質✝と言い、誰かが天文学の本を読んでいる。この不思議な場所に来ると、なぜか頭の中が整理される。\n\n【北棟からの帰り道。三峰に連絡が来た。】",
    bg: "hallway_north",
    next: "b2_route_c_line"
  },
  "b2_route_c_line": {
    id: "b2_route_c_line",
    type: "dialogue",
    speaker: "三峰瑠衣",
    speakerKey: "mimine",
    expression: "sharp",
    text: "で、どうだった？ (LINE通知)",
    bg: "hallway_north",
    next: "b2_route_c_2"
  },
  "b2_route_c_2": {
    id: "b2_route_c_2",
    type: "dialogue",
    speaker: "櫻優",
    text: "……特に何もありませんでした",
    bg: "hallway_north",
    next: "b2_route_c_3"
  },
  "b2_route_c_3": {
    id: "b2_route_c_3",
    type: "dialogue",
    speaker: "三峰瑠衣",
    speakerKey: "mimine",
    expression: "sharp",
    text: "あんたが理論に逃げ続けるなら、あたしが代わりに内藤さんに話しかけにいくよ (LINE通知)",
    bg: "hallway_north",
    next: "b2_route_c_4"
  },
  "b2_route_c_4": {
    id: "b2_route_c_4",
    type: "narration",
    text: "三峰の直球が来た。",
    bg: "hallway_north",
    next: "b2_merge"
  },

  // B2_MERGE
  "b2_merge": {
    id: "b2_merge",
    type: "narration",
    text: "北棟から南棟に戻る廊下。\n二つの棟の間に、桜並木がある。今は葉が出ていて、花の季節ではない。\nでも、ここが唯一、内進と理数科が同じ木の下を歩く場所だ。",
    bg: "hallway_south",
    next: "b2_merge_2"
  },
  "b2_merge_2": {
    id: "b2_merge_2",
    type: "narration",
    text: "僕は研究ノートを開いた。\n「恋愛発生の第十四法則（暫定）：当事者になると理論は機能しない」と書いた。\n書いてから気づいた。理論が機能しないなら、研究ノートを書いている意味もない。でも書かずにはいられない。これが——恋愛の✝本質✝かもしれない。",
    bg: "hallway_south",
    next: "ch3_001"
  }
};
