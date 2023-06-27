const WordsList = [ "able", "about", "absolute", "accept", "account", "achieve", "across", "active", "actual", "address", "admit", "advertise", "affect", "afford", "after", "afternoon", "again", "against", "agent", "agree", "allow", "almost", "along", "already", "alright", "also", "although", "always", "america", "amount", "another", "answer", "apart", "apparent", "appear", "apply", "appoint", "approach", "appropriate", "area", "argue", "around", "arrange", "associate", "assume", "attend", "authority", "available", "aware", "away", "awful", "baby", "back", "balance", "ball", "bank", "base", "basis", "bear", "beat", "beauty", "because", "become", "before", "begin", "behind", "believe", "benefit", "best", "between", "bill", "birth", "black", "bloke", "blood", "blow", "blue", "board", "boat", "body", "book", "both", "bother", "bottle", "bottom", "break", "brief", "brilliant", "bring", "britain", "brother", "budget", "build", "business", "busy", "cake", "call", "card", "care", "carry", "case", "catch", "cause", "cent", "centre", "certain", "chair", "chairman", "chance", "change", "chap", "character", "charge", "cheap", "check", "child", "choice", "choose", "Christ", "Christmas", "church", "city", "claim", "class", "clean", "clear", "client", "clock", "close", "closes", "clothe", "club", "coffee", "cold", "colleague", "collect", "college", "colour", "come", "comment", "commit", "committee", "common", "community", "company", "compare", "complete", "compute", "concern", "condition", "confer", "consider", "consult", "contact", "continue", "contract", "control", "converse", "cook", "copy", "corner", "correct", "cost", "could", "council", "count", "country", "county", "couple", "course", "court", "cover", "create", "cross", "current", "danger", "date", "dead", "deal", "dear", "debate", "decide", "decision", "deep", "definite", "degree", "department", "depend", "describe", "design", "detail", "develop", "difference", "difficult", "dinner", "direct", "discuss", "district", "divide", "doctor", "document", "door", "double", "doubt", "down", "draw", "dress", "drink", "drive", "drop", "during", "each", "early", "east", "easy", "economy", "educate", "effect", "eight", "either", "elect", "electric", "eleven", "else", "employ", "encourage", "engine", "english", "enjoy", "enough", "enter", "environment", "equal", "especial", "europe", "even", "evening", "ever", "every", "evidence", "exact", "example", "except", "excuse", "exercise", "exist", "expect", "expense", "experience", "explain", "express", "extra", "face", "fact", "fair", "fall", "family", "farm", "fast", "father", "favour", "feed", "feel", "field", "fight", "figure", "file", "fill", "film", "final", "finance", "find", "fine", "finish", "fire", "first", "fish", "five", "flat", "floor", "follow", "food", "foot", "force", "forget", "form", "fortune", "forward", "four", "france", "free", "friday", "friend", "from", "front", "full", "function", "fund", "further", "future", "game", "garden", "general", "germany", "girl", "give", "glass", "good", "goodbye", "govern", "grand", "grant", "great", "green", "ground", "group", "grow", "guess", "hair", "half", "hall", "hand", "hang", "happen", "happy", "hard", "hate", "have", "head", "health", "hear", "heart", "heat", "heavy", "hell", "help", "here", "high", "history", "hold", "holiday", "home", "honest", "hope", "horse", "hospital", "hour", "house", "however", "hullo", "hundred", "husband", "idea", "identify", "imagine", "important", "improve", "include", "income", "increase", "indeed", "individual", "industry", "inform", "inside", "instead", "insure", "interest", "into", "introduce", "invest", "involve", "issue", "item", "jesus", "join", "judge", "jump", "just", "keep", "kill", "kind", "king", "kitchen", "knock", "know", "labour", "lady", "land", "language", "large", "last", "late", "laugh", "lead", "learn", "leave", "left", "less", "letter", "level", "life", "light", "like", "likely", "limit", "line", "link", "list", "listen", "little", "live", "load", "local", "lock", "london", "long", "look", "lord", "lose", "love", "luck", "lunch", "machine", "main", "major", "make", "manage", "many", "mark", "market", "marry", "match", "matter", "maybe", "mean", "meaning", "measure", "meet", "member", "mention", "middle", "might", "mile", "milk", "million", "mind", "minister", "minus", "minute", "miss", "mister", "moment", "monday", "money", "month", "more", "morning", "most", "mother", "motion", "move", "much", "music", "must", "name", "nation", "nature", "near", "necessary", "need", "never", "news", "next", "nice", "night", "nine", "none", "normal", "north", "note", "notice", "number", "obvious", "occasion", "offer", "office", "often", "okay", "once", "only", "open", "operate", "opportunity", "oppose", "order", "organize", "original", "other", "otherwise", "ought", "over", "pack", "page", "paint", "pair", "paper", "paragraph", "pardon", "parent", "park", "part", "particular", "party", "pass", "past", "pence", "pension", "people", "percent", "perfect", "perhaps", "period", "person", "photograph", "pick", "picture", "piece", "place", "plan", "play", "please", "plus", "point", "police", "policy", "politic", "poor", "position", "positive", "possible", "post", "pound", "power", "practise", "prepare", "present", "press", "pressure", "presume", "pretty", "previous", "price", "print", "private", "probable", "problem", "proceed", "process", "produce", "product", "programme", "project", "proper", "propose", "protect", "provide", "public", "pull", "purpose", "push", "quality", "quarter", "question", "quick", "quid", "quiet", "quite", "radio", "rail", "raise", "range", "rate", "rather", "read", "ready", "real", "realise", "really", "reason", "receive", "recent", "reckon", "recognize", "recommend", "record", "reduce", "refer", "regard", "region", "relation", "remember", "report", "represent", "require", "research", "resource", "respect", "responsible", "rest", "result", "return", "right", "ring", "rise", "road", "role", "roll", "room", "round", "rule", "safe", "sale", "same", "saturday", "save", "scheme", "school", "science", "score", "scotland", "seat", "second", "secretary", "section", "secure", "seem", "self", "sell", "send", "sense", "separate", "serious", "serve", "service", "settle", "seven", "shall", "share", "sheet", "shoe", "shoot", "shop", "short", "should", "show", "shut", "sick", "side", "sign", "similar", "simple", "since", "sing", "single", "sister", "site", "situate", "size", "sleep", "slight", "slow", "small", "smoke", "social", "society", "some", "soon", "sorry", "sort", "sound", "south", "space", "speak", "special", "specific", "speed", "spell", "spend", "square", "staff", "stage", "stairs", "stand", "standard", "start", "state", "station", "stay", "step", "stick", "still", "stop", "story", "straight", "strategy", "street", "strike", "strong", "structure", "student", "study", "stuff", "stupid", "subject", "succeed", "such", "sudden", "suggest", "suit", "summer", "sunday", "supply", "support", "suppose", "sure", "surprise", "switch", "system", "table", "take", "talk", "tape", "teach", "team", "telephone", "television", "tell", "tend", "term", "terrible", "test", "than", "thank", "then", "there", "therefore", "they", "thing", "think", "thirteen", "thirty", "this", "thou", "though", "thousand", "three", "through", "throw", "thursday", "time", "today", "together", "tomorrow", "tonight", "total", "touch", "toward", "town", "trade", "traffic", "train", "transport", "travel", "treat", "tree", "trouble", "true", "trust", "tuesday", "turn", "twelve", "twenty", "type", "under", "understand", "union", "unit", "unite", "university", "unless", "until", "upon", "usual", "value", "various", "very", "video", "view", "village", "visit", "vote", "wage", "wait", "walk", "wall", "want", "warm", "wash", "waste", "watch", "water", "wear", "wednesday", "week", "weigh", "welcome", "well", "west", "what", "when", "where", "whether", "which", "while", "white", "whole", "wide", "wife", "will", "wind", "window", "wish", "with", "within", "without", "woman", "wonder", "wood", "word", "work", "world", "worry", "worse", "worth", "would", "write", "wrong", "year", "yesterday", "young", "Aristotelian", "Arthurian", "Bohemian", "Brethren", "Mosaic", "Oceanic", "Proctor", "Terran", "Tudor", "abroad", "absorbing", "abstract", "academic", "accelerated", "accented", "accountant", "acquainted", "acute", "addicting", "addictive", "adjustable", "admired", "adult", "adverse", "advised", "aerosol", "afraid", "aggravated", "aggressive", "agreeable", "alienate", "aligned", "allround", "alleged", "almond", "alright", "altruistic", "ambient", "ambivalent", "amiable", "amino", "amorphous", "amused", "anatomical", "ancestral", "angelic", "angrier", "answerable", "antiquarian", "appellate", "applicable", "apportioned", "approachable", "appropriated", "archer", "aroused", "arrested", "assertive", "assigned", "athletic", "atrocious", "attained", "avaricious", "avocado", "awake", "awsome", "backstage", "backwoods", "balding", "bandaged", "banded", "banned", "barreled", "battle", "beaten", "begotten", "beguiled", "bellied", "belted", "beneficent", "besieged", "betting", "bigmoney", "biggest", "biochemical", "bipolar", "blackened", "blame", "blessed", "blindfolded", "bloat", "blocked", "blooded", "bluecollar", "blushing", "boastful", "bolder", "bolstered", "bonnie", "bored", "boundary", "bounded", "bounding", "branched", "brawling", "brazen", "breeding", "bridged", "brimming", "brimstone", "broadest", "broiled", "broker", "bronze", "bruising", "buffy", "bullied", "bungling", "burial", "buttery", "candied", "canonical", "cantankerous", "cardinal", "carefree", "caretaker", "casual", "cathartic", "causal", "chapel", "charcoal", "cheeky", "cherished", "chipotle", "chirping", "chivalrous", "civic", "civil", "civilised", "clanking", "clapping", "claptrap", "classless", "cleansed", "cleric", "cloistered", "codified", "colloquial", "colour", "combat", "combined", "comely", "commissioned", "commonplace", "commuter", "commuting", "comparable", "compromising", "conceding", "concentrated", "conceptual", "conditioned", "confederate", "confident", "confidential", "confining", "confuse", "conservative", "constituent", "contaminated", "convertible", "convex", "cooked", "coronary", "corporatist", "correlated", "corroborated", "cosmic", "cover", "crash", "crypto", "culminate", "cushioned", "dandy", "dashing", "dazzled", "decreased", "decrepit", "dedicated", "defaced", "defective", "defenseless", "deluded", "deodorant", "departed", "depress", "designing", "despairing", "destitute", "detective", "determined", "devastating", "deviant", "devilish", "devoted", "diagonal", "dictated", "didactic", "diffused", "dirtier", "disabling", "disconnected", "discovered", "disdainful", "diseased", "disfigured", "disheartened", "disheveled", "disparate", "dissident", "doable", "doctrinal", "doing", "dotted", "doubleblind", "downbeat", "dozen", "draining", "draught", "dread", "dried", "dropped", "dulled", "duplicate", "eaten", "echoing", "economical", "elaborated", "elastic", "elective", "electoral", "elven", "embryo", "emerald", "emergency", "emissary", "emotional", "employed", "enamel", "encased", "encrusted", "endangered", "engraved", "engrossing", "enlarged", "enlisted", "enlivened", "ensconced", "entangled", "enthralling", "entire", "envious", "eradicated", "eroded", "esoteric", "essential", "evaporated", "everpresent", "evergreen", "everlasting", "exacting", "exasperated", "excess", "exciting", "executable", "existent", "exonerated", "exorbitant", "exponential", "export", "exultant", "exulting", "facsimile", "fading", "fainter", "faithbased", "fallacious", "faltering", "famous", "fancier", "fastgrowing", "fated", "favourable", "fearless", "feathered", "fellow", "fermented", "ferocious", "fiddling", "filling", "firmer", "fitted", "flammable", "flawed", "fledgling", "fleshy", "flexible", "flickering", "floral", "flowering", "flowing", "foggy", "folic", "foolhardy", "foolish", "footy", "forehand", "forked", "formative", "formulaic", "foulmouthed", "fractional", "fragrant", "fraudulent", "freakish", "freckled", "freelance", "freight", "fresh", "fretted", "frugal", "fulfilling", "fuming", "funded", "funny", "garbled", "gathered", "geologic", "geometric", "gibberish", "gilded", "ginger", "glare", "glaring", "gleaming", "glorified", "glorious", "goalless", "goldplated", "goody", "grammatical", "grande", "grateful", "gratuitous", "graven", "greener", "grinding", "grizzly", "groaning", "grudging", "guaranteed", "gusty", "halfbreed", "handheld", "handheld", "handsoff", "hardpressed", "harlot", "healing", "healthier", "healthiest", "heart", "heartshaped", "heathen", "hedonistic", "heralded", "herbal", "highdensity", "highres", "highyield", "hissy", "hitless", "holiness", "homesick", "honorable", "hooded", "hopeless", "horrendous", "horrible", "hotbutton", "huddled", "human", "humbling", "humid", "humiliating", "hypnotized", "idealistic", "ignited", "illustrated", "illustrative", "imitated", "immense", "immersive", "immigrant", "immoral", "impassive", "improbable", "impulsive", "inbetween", "inflight", "inattentive", "inbound", "inbounds", "incalculable", "indigo", "indomitable", "inert", "inflate", "inform", "inheriting", "injured", "injurious", "inking", "inoffensive", "insane", "insensible", "insidious", "insincere", "insistent", "insolent", "insufferable", "intemperate", "interesting", "interfering", "intern", "interpreted", "intersecting", "intolerable", "intolerant", "intuitive", "irresolute", "irritate", "jealous", "jerking", "joining", "joint", "journalistic", "joyful", "keyed", "knowing", "lacklustre", "laden", "lagging", "lamented", "laughable", "layered", "leather", "leathern", "leery", "leftfooted", "legible", "leisure", "lessening", "liberating", "lifesize", "lifted", "lightest", "limitless", "listening", "literary", "liver", "livid", "lobster", "locked", "longheld", "longlasting", "longrunning", "loudest", "loveliest", "lowbudget", "lowcarb", "lowering", "lucid", "luckless", "lusty", "luxurious", "magazine", "maniac", "manmade", "maroon", "mastered", "mated", "material", "meaningful", "measuring", "mediaeval", "medical", "meditated", "medley", "melodic", "memorable", "memorial", "metabolic", "metallic", "metering", "midair", "midterm", "midway", "mighty", "migrating", "mindblowing", "mindboggling", "minor", "mirrored", "misguided", "misshapen", "mitigated", "mixed", "modernized", "molecular", "monarch", "monastic", "morbid", "motley", "motorized", "mounted", "multimillion", "muscled", "muscular", "muted", "mysterious", "mythic", "nailbiting", "natural", "nauseous", "negative", "networked", "neurological", "neutered", "newest", "night", "nitrous", "nofly", "nonsense", "north", "nuanced", "occurring", "offensive", "oldest", "oncoming", "oneeyed", "oneyear", "onstage", "onward", "opaque", "openended", "operating", "opportunist", "opposing", "optin", "ordinate", "outdone", "outlaw", "outsized", "overboard", "overheated", "oversize", "overworked", "oyster", "paced", "panting", "paralyzed", "paramount", "parental", "parted", "partisan", "passive", "pastel", "patriot", "peacekeeping", "pedestrian", "peevish", "penal", "penned", "pensive", "perceptual", "perky", "permissible", "pernicious", "perpetuate", "perplexed", "pervasive", "picturesque", "pillaged", "piped", "piquant", "pitching", "plausible", "pliable", "plumb", "politician", "polygamous", "poorest", "portmanteau", "posed", "positive", "possible", "postpartum", "prank", "preemptive", "precocious", "predicted", "premium", "preparatory", "prerequisite", "prescient", "preserved", "presidential", "pressed", "pressurized", "presumed", "prewar", "priced", "pricier", "primal", "primer", "primetime", "printed", "private", "problem", "procedural", "process", "prodigious", "professional", "programmed", "progressive", "prolific", "promising", "promulgated", "pronged", "protracted", "pulled", "pulsed", "purgatory", "quick", "rapidfire", "raunchy", "razed", "reactive", "readable", "realizing", "recognised", "recovering", "recurrent", "recycled", "redeemable", "reflecting", "regal", "registering", "reliable", "reminiscent", "remorseless", "removable", "renewable", "repeating", "repellent", "reserve", "resigned", "respectful", "rested", "restrict", "resultant", "retaliatory", "retiring", "revelatory", "reverend", "reversing", "revolving", "ridiculous", "righthand", "ringed", "risque", "robust", "roomful", "rotating", "roused", "rubber", "rundown", "running", "runtime", "rustling", "safest", "salient", "sanctioned", "saute", "saved", "scandalized", "scarlet", "scattering", "sceptical", "scheming", "scoundrel", "scratched", "scratchy", "scrolled", "seated", "secondbest", "segregated", "selftaught", "senior", "sensed", "sentient", "sexier", "shadowy", "shaken", "shaker", "shameless", "shaped", "shiny", "shipped", "shivering", "shoestring", "short", "shortlived", "signed", "simplest", "simplistic", "sizable", "skeleton", "skinny", "skirting", "skyrocketed", "slamming", "slanting", "slapstick", "sleek", "sleepless", "sleepy", "slender", "slimmer", "smacking", "smokeless", "smothered", "smouldering", "snuff", "socialized", "solidstate", "sometime", "sought", "spanking", "sparing", "spattered", "specialized", "specific", "speedy", "spherical", "spiky", "spineless", "sprung", "squint", "stainless", "standing", "starlight", "startled", "stately", "statewide", "stereoscopic", "sticky", "stimulant", "stinky", "stoked", "stolen", "storied", "strained", "strapping", "strengthened", "stubborn", "stylized", "suave", "subjective", "subjugated", "subordinate", "succeeding", "suffering", "summary", "sunset", "sunshine", "supernatural", "supervisory", "supplyside", "surrogate", "suspended", "suspenseful", "swarthy", "sweating", "sweeping", "swinging", "swooning", "sympathize", "synchronized", "synonymous", "synthetic", "tailed", "tallest", "tangible", "tanked", "tarry", "technical", "tectonic", "telepathic", "tenderest", "territorial", "testimonial", "theistic", "thicker", "threatening", "tightlipped", "timed", "timely", "timid", "torrent", "totalled", "tougher", "traditional", "transformed", "trapped", "traveled", "traverse", "treated", "trial", "trunk", "trusting", "trying", "twisted", "twolane", "tyrannical", "unaided", "unassisted", "unassuming", "unattractive", "uncapped", "uncontrolled", "uncooked", "underground", "undersea", "undisturbed", "unearthly", "uneasy", "unequal", "unfazed", "unfinished", "unforeseen", "unforgivable", "unidentified", "uninspired", "unintended", "uninvited", "universal", "unmasked", "unorthodox", "unparalleled", "unpleasant", "unprincipled", "unread", "unreasonable", "unregulated", "unreliable", "unremitting", "unsafe", "unsanitary", "unsealed", "unsuccessful", "unsupervised", "untimely", "unwary", "unwrapped", "uppity", "upstart", "useless", "utter", "valiant", "valid", "valued", "vanilla", "vaulting", "vaunted", "veering", "vegetative", "vented", "verbal", "verifying", "veritable", "versed", "vinyl", "virgin", "visceral", "visual", "voluptuous", "walkon", "wanton", "warlike", "washed", "waterproof", "waved", "weakest", "wellbred", "wellchosen", "wellinformed", "wetting", "wheeled", "whirlwind", "widen", "widening", "willful", "willing", "winnable", "winningest", "wireless", "wistful", "woeful", "wooded", "woodland", "wordless", "workable", "worldly", "worldwide", "worstcase", "worsted", "worthless", "abnormally", "accidentally", "acidly", "actually", "afterwards", "almost", "always", "angrily", "annually", "anxiously", "arrogantly", "awkwardly", "badly", "bashfully", "beautifully", "bitterly", "bleakly", "blindly", "blissfully", "boastfully", "boldly", "bravely", "briefly", "brightly", "briskly", "broadly", "busily", "calmly", "carefully", "carelessly", "cautiously", "certainly", "cheerfully", "clearly", "cleverly", "closely", "coaxingly", "colorfully", "commonly", "continually", "coolly", "correctly", "courageously", "crossly", "cruelly", "curiously", "daily", "daintily", "dearly", "deceivingly", "deeply", "defiantly", "deliberately", "delightfully", "diligently", "dimly", "doubtfully", "dreamily", "easily", "elegantly", "enormously", "equally", "especially", "even", "evenly", "eventually", "exactly", "excitedly", "extremely", "fairly", "faithfully", "famously", "fast", "fatally", "ferociously", "fervently", "fiercely", "fondly", "foolishly", "fortunately", "frankly", "frantically", "freely", "frenetically", "frightfully", "fully", "furiously", "generally", "generously", "gently", "gladly", "gleefully", "gracefully", "gratefully", "greatly", "greedily", "happily", "hastily", "healthily", "heavily", "helpfully", "helplessly", "highly", "honestly", "hopelessly", "hourly", "hungrily", "immediately", "innocently", "instantly", "intensely", "intently", "inwardly", "irritably", "jaggedly", "jealously", "joshingly", "jovially", "joyfully", "joyously", "jubilantly", "justly", "keenly", "kiddingly", "kindly", "kissingly", "knavishly", "knottily", "knowingly", "kookily", "lazily", "less", "lightly", "likely", "limply", "lively", "loftily", "longingly", "loosely", "loudly", "lovingly", "loyally", "madly", "majestically", "meaningfully", "mechanically", "merrily", "miserably", "mockingly", "monthly", "more", "mortally", "mostly", "mysteriously", "naturally", "nearly", "neatly", "needily", "nervously", "never", "nicely", "noisily", "obediently", "obnoxiously", "oddly", "offensively", "officially", "often", "only", "openly", "owlishly", "painfully", "partially", "patiently", "perfectly", "physically", "playfully", "politely", "poorly", "positively", "potentially", "powerfully", "promptly", "properly", "punctually", "quaintly", "queasily", "queerly", "questionably", "quicker", "quickly", "quietly", "quirkily", "quizzically", "rapidly", "rarely", "readily", "really", "reassuringly", "recklessly", "regularly", "reluctantly", "repeatedly", "restfully", "righteously", "rightfully", "rigidly", "roughly", "rudely", "sadly", "safely", "scarcely", "scarily", "searchingly", "sedately", "seemingly", "seldom", "selfishly", "separately", "seriously", "shakily", "sharply", "sheepishly", "shrilly", "shyly", "silently", "sleepily", "slowly", "smoothly", "softly", "solemnly", "solidly", "sometimes", "soon", "speedily", "stealthily", "sternly", "strictly", "successfully", "suddenly", "surprisingly", "suspiciously", "sweetly", "swiftly", "tenderly", "tensely", "terribly", "thankfully", "thoroughly", "thoughtfully", "tightly", "tomorrow", "tremendously", "triumphantly", "truly", "truthfully", "ultimately", "unabashedly", "unbearably", "unethically", "unexpectedly", "unnaturally", "upbeat", "upliftingly", "upright", "upsidedown", "upward", "upwardly", "urgently", "usefully", "uselessly", "usually", "utterly", "vacantly", "vaguely", "vainly", "valiantly", "vastly", "verbally", "very", "viciously", "victoriously", "violently", "vivaciously", "voluntarily", "warmly", "weakly", "wearily", "well", "wetly", "wholly", "wildly", "willfully", "wisely", "woefully", "wonderfully", "worriedly", "wrongly", "yawningly", "yearly", "yearningly", "yesterday", "yieldingly", "youthfully", "Armour", "Barrymore", "Cabot", "Catholicism", "Chihuahua", "Christianity", "Easter", "Frenchman", "Lowry", "Mayer", "Orientalism", "Pharaoh", "Pueblo", "Pullman", "Rodeo", "Saturday", "Sister", "Snead", "Syrah", "Tuesday", "Woodward", "abbey", "absence", "absorption", "abstinence", "absurdity", "abundance", "acceptance", "accomplice", "accounting", "accuracy", "acquiescence", "acreage", "actress", "actuality", "adage", "adaptation", "adherence", "adjustment", "adoption", "adultery", "advancement", "advert", "advertising", "advice", "aesthetics", "affinity", "aggression", "agriculture", "aircraft", "airtime", "allegation", "allegiance", "allegory", "allergy", "allies", "alligator", "allocation", "allotment", "altercation", "ambulance", "ammonia", "anatomy", "anemia", "ankle", "announcement", "annoyance", "annuity", "anomaly", "anthropology", "anxiety", "apartheid", "apologise", "apostle", "apparatus", "appeasement", "appellation", "appendix", "applause", "appointment", "appraisal", "archery", "archipelago", "architecture", "ardor", "arrears", "arrow", "artisan", "artistry", "ascent", "assembly", "assignment", "association", "asthma", "atheism", "attacker", "attraction", "auspices", "authority", "avarice", "aversion", "aviation", "babbling", "backlash", "baker", "ballet", "balls", "banjo", "baron", "barrier", "barrister", "bases", "basin", "basis", "battery", "battling", "bedtime", "beginner", "begun", "bending", "bicycle", "billing", "bingo", "biography", "biology", "birthplace", "blackberry", "blather", "blossom", "boardroom", "boasting", "bodyguard", "boldness", "bomber", "bondage", "bonding", "bones", "bonus", "bookmark", "boomer", "booty", "bounds", "bowling", "breadth", "breaker", "brewer", "brightness", "broccoli", "broth", "brotherhood", "browsing", "brunch", "brunt", "building", "bullion", "bureaucracy", "burglary", "buyout", "byelection", "cabal", "cabbage", "calamity", "campaign", "canonization", "captaincy", "carcass", "carrier", "cartridge", "cassette", "catfish", "caught", "celebrity", "cemetery", "certainty", "charade", "chasm", "checkin", "cheerleader", "cheesecake", "chemotherapy", "chili", "china", "chivalry", "cholera", "cilantro", "circus", "civilisation", "civility", "clearance", "clearing", "clerk", "climber", "closeness", "clothing", "clutches", "coaster", "coconut", "coding", "collaborator", "colleague", "college", "collision", "colors", "combustion", "comedian", "comer", "commander", "commenter", "commissioner", "commune", "competition", "completeness", "complexity", "computing", "comrade", "concur", "condominium", "conduit", "confidant", "confiscation", "conflict", "consist", "consistency", "conspiracy", "constable", "consul", "consultancy", "contentment", "contents", "contractor", "conversation", "cornerstone", "corpus", "correlation", "councilman", "counselor", "countdown", "countryman", "coverage", "covering", "coyote", "cracker", "creator", "criminality", "crocodile", "cropping", "crossover", "crossroads", "culprit", "cumin", "curator", "curfew", "cursor", "custard", "cutter", "cyclist", "cyclone", "cylinder", "cynicism", "daddy", "damsel", "darkness", "dawning", "daybreak", "dealing", "dedication", "deduction", "defection", "deference", "deficiency", "definition", "deflation", "degeneration", "delegation", "delicacy", "delirium", "deliverance", "demeanor", "demon", "denomination", "dentist", "departure", "depletion", "depression", "designation", "despotism", "detention", "developer", "devolution", "dexterity", "diagnosis", "dialect", "digger", "digress", "dioxide", "diploma", "disability", "disarmament", "discord", "discovery", "dishonesty", "dismissal", "disobedience", "dispatcher", "disservice", "distribution", "distributor", "diver", "diversity", "docking", "dollar", "dominance", "domination", "dominion", "donkey", "doorstep", "doorway", "dossier", "downside", "drafting", "drank", "drilling", "driver", "drumming", "drunkenness", "duchess", "ducking", "dugout", "dumps", "dwelling", "dynamics", "eagerness", "earnestness", "earnings", "eater", "editor", "electricity", "elements", "eloquence", "emancipation", "embodiment", "embroidery", "emperor", "employment", "encampment", "enclosure", "endangerment", "enthusiasm", "environment", "environs", "envoy", "epilepsy", "equation", "equator", "error", "espionage", "estimation", "evacuation", "exaggeration", "examination", "exclamation", "expediency", "exploitation", "extinction", "eyewitness", "falls", "fascism", "fastball", "feces", "feedback", "ferocity", "fetish", "finale", "firing", "fixing", "flashing", "flask", "flora", "fluke", "folklore", "follower", "foothold", "footing", "forefinger", "forefront", "forgiveness", "formality", "formation", "formula", "foyer", "framework", "fraud", "freestyle", "frequency", "friendliness", "fries", "frigate", "fulfillment", "function", "fundraiser", "fusion", "futility", "gallantry", "gallery", "genesis", "genitals", "girlfriend", "glamour", "glitter", "glucose", "google", "grandeur", "grappling", "greens", "gridlock", "grocer", "groundwork", "grouping", "gunman", "gusto", "habitation", "hacker", "hallway", "hamburger", "hammock", "handling", "hands", "handshake", "happiness", "hardship", "headcount", "header", "headquarters", "heads", "headset", "hearth", "hearts", "heath", "hegemony", "height", "hello", "helper", "helping", "helplessness", "hierarchy", "hoarding", "hockey", "homeland", "homer", "honesty", "horror", "horseman", "hostility", "housing", "humility", "hurricane", "iceberg", "ignition", "illness", "illustration", "illustrator", "immunity", "immunization", "imperialism", "imprisonment", "inaccuracy", "inaction", "inactivity", "inauguration", "indecency", "indicator", "infamy", "infiltration", "influx", "iniquity", "innocence", "innovation", "insanity", "inspiration", "instruction", "instructor", "insurer", "interact", "intercession", "intercourse", "intermission", "intersection", "interval", "intolerance", "intruder", "invasion", "investment", "involvement", "irrigation", "iteration", "jenny", "jogging", "jones", "joseph", "juggernaut", "juncture", "juror", "kangaroo", "kingdom", "knocking", "laborer", "larceny", "laurels", "layout", "leadership", "leasing", "legislation", "leopard", "liberation", "licence", "lifeblood", "lifeline", "ligament", "lighting", "likeness", "lineup", "lineage", "liner", "lineup", "liquidation", "listener", "literature", "litigation", "litre", "loathing", "locality", "lodging", "logic", "longevity", "lookout", "lordship", "lustre", "ma'am", "machinery", "madness", "magnificence", "mahogany", "mailing", "mainframe", "maintenance", "majority", "manga", "mango", "manifesto", "mantra", "manufacturer", "maple", "martin", "martyrdom", "matrix", "matron", "mayhem", "mayor", "means", "meantime", "measurement", "mechanics", "mediator", "medics", "melodrama", "memory", "mentality", "metaphysics", "method", "metre", "miner", "mirth", "misery", "mishap", "mobility", "molasses", "momentum", "monarchy", "monument", "morale", "mortality", "motto", "mouthful", "mouthpiece", "mover", "movie", "mowing", "murderer", "musician", "mutation", "mythology", "narration", "narrator", "nationality", "negligence", "neighborhood", "neighbour", "nervousness", "networking", "nexus", "nightmare", "nobility", "nobody", "noodle", "normalcy", "notification", "nourishment", "novella", "nucleus", "nuisance", "nursery", "nutrition", "nylon", "oasis", "obscenity", "obscurity", "observer", "offense", "onslaught", "operation", "opportunity", "opposition", "oracle", "orchestra", "organisation", "organizer", "orientation", "originality", "ounce", "outage", "outcome", "outdoors", "outfield", "outing", "outpost", "outset", "overseer", "owner", "oxygen", "pairing", "panther", "paradox", "parliament", "parsley", "parson", "passenger", "pasta", "patchwork", "pathos", "patriotism", "pendulum", "penguin", "permission", "persona", "perusal", "pessimism", "peter", "philosopher", "phosphorus", "phrasing", "physique", "piles", "plateau", "playing", "plaza", "plethora", "plurality", "pneumonia", "pointer", "poker", "policeman", "polling", "poster", "posterity", "posting", "postponement", "potassium", "pottery", "poultry", "pounding", "pragmatism", "precedence", "precinct", "pretense", "priesthood", "prisoner", "privacy", "probation", "proceeding", "proceedings", "processing", "processor", "progression", "projection", "prominence", "propensity", "prophecy", "prorogation", "prospectus", "protein", "prototype", "providence", "provider", "provocation", "proximity", "puberty", "publicist", "publicity", "publisher", "pundit", "putting", "quantity", "quart", "quilting", "quorum", "racism", "radiance", "ralph", "rancher", "ranger", "rapidity", "rapport", "ratification", "rationality", "reaction", "reader", "reassurance", "rebirth", "receptor", "recipe", "recognition", "recourse", "recreation", "rector", "recurrence", "redemption", "redundancy", "refinery", "reformer", "refrigerator", "regularity", "regulator", "reins", "relativism", "relaxation", "rendition", "repayment", "repentance", "repertoire", "repository", "republic", "reputation", "resentment", "residency", "resignation", "restaurant", "resurgence", "retailer", "retention", "retirement", "reviewer", "riches", "roadblock", "robber", "rocks", "rubbing", "runoff", "saloon", "salvation", "sarcasm", "saucer", "savior", "scarcity", "scenario", "scenery", "schism", "scholarship", "schoolboy", "schooner", "scissors", "scolding", "scooter", "scouring", "scrimmage", "scrum", "seating", "sediment", "seduction", "seeder", "seizure", "selfcontrol", "selfrespect", "semicolon", "semifinal", "senator", "sending", "serenity", "seriousness", "servitude", "sesame", "setup", "sewing", "sharpness", "shaving", "shoplifting", "shopping", "siding", "simplicity", "simulation", "sinking", "skate", "sloth", "slugger", "snack", "snail", "snapshot", "snark", "soccer", "solemnity", "solicitation", "solitude", "somewhere", "sorcery", "souvenir", "spaghetti", "specimen", "specs", "spectacle", "spectre", "speculation", "sperm", "spoiler", "squad", "squid", "staging", "stagnation", "staircase", "stairway", "stamina", "standpoint", "standstill", "stanza", "statement", "stillness", "stimulus", "stocks", "stole", "stoppage", "storey", "storyteller", "stylus", "subcommittee", "subscription", "subsidy", "suburb", "success", "sufferer", "supposition", "suspension", "sweater", "sweepstakes", "swimmer", "syndrome", "synopsis", "syntax", "system", "tablespoon", "taker", "tavern", "technology", "telephony", "template", "tempo", "tendency", "tendon", "terrier", "terror", "terry", "theater", "theology", "therapy", "thicket", "thoroughfare", "threshold", "thriller", "thunderstorm", "ticker", "tiger", "tights", "today", "tossing", "touchdown", "tourist", "tourney", "toxicity", "tracing", "tractor", "translation", "transmission", "transmitter", "trauma", "traveler", "treadmill", "trilogy", "trout", "tuning", "twenties", "tycoon", "tyrant", "ultimatum", "underdog", "underwear", "unhappiness", "unification", "university", "uprising", "vaccination", "validity", "vampire", "vanguard", "variation", "vegetation", "verification", "viability", "vicinity", "victory", "viewpoint", "villa", "vindication", "violation", "vista", "vocalist", "vogue", "volcano", "voltage", "vomiting", "waistcoat", "waitress", "wardrobe", "warmth", "watchdog", "wealth", "weariness", "whereabouts", "whisky", "whiteness", "widget", "width", "windfall", "wiring", "witchcraft", "withholding", "womanhood", "words", "workman", "youngster" ];
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const char_width = 16;
const char_height = 32;
const TerminalWidth = 54;
const TerminalHeight = 22;
const DumpWidth = 12;
const DumpHeight = 34;
const iHackingMinWords = 5;
const iHackingMaxWords = 20;
let CursorWordIndex = 0;
let CursorFlat = 0;
let GlobalCursor = {x:0, y:0};
let mouseDown = false;
let IOLog = [];
const TrashChars = "!\"#$%&\'()*+/:;<=>?@\\[\\]^_{|}";
const OpenBrackets = "<[{(";
const CloseBrackets = ">]})";
let PasswordLength = 0;
let WordCount = 0;
let CurrentAttempts = 4;
let MaxCurrentAttempts = 4;
let Password = "";
let Duds = [];
let HexAddresses = [];
let WordsTable = [];
canvas.width = char_width*TerminalWidth;
canvas.height = char_height*TerminalHeight;
let chars = [];
//Случайное целое от 0 до max НЕ включительно
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

//Инициализация матрицы консоли
function chars_init(){
  for (let fx = 0; fx < TerminalWidth; fx++) {
    chars[fx] = [];
    for (let fy = 0; fy < TerminalHeight; fy++) {
      chars[fx][fy] = { 
    term_x: fx, term_y: fy, 
    canvas_x: fx * char_width,
    canvas_y: fy * char_height,
    char:" ",
    bkColor:"#"+(40).toString(16).padStart(2,'0')+(40).toString(16).padStart(2,'0')+(40).toString(16).padStart(2,'0'),
    color:"#"+(255).toString(16).padStart(2,'0')+(176).toString(16).padStart(2,'0')+(0).toString(16).padStart(2,'0'),
    status: 0 };
    }
  }
}
//очистка области
function flushRect(x,y,w,h){
  for (let fx = x; fx < x+w; fx++) {
    for (let fy = y; fy < y+h; fy++) {
      chars[fx][fy] = { 
    term_x: fx, term_y: fy, 
    canvas_x: fx * char_width,
    canvas_y: fy * char_height,
    char:" ",
    bkColor:"#"+(40).toString(16).padStart(2,'0')+(40).toString(16).padStart(2,'0')+(40).toString(16).padStart(2,'0'),
    color:"#"+(255).toString(16).padStart(2,'0')+(176).toString(16).padStart(2,'0')+(0).toString(16).padStart(2,'0'),
    status: 0 };
    }
  }
}
//Число потенциальных паролей
function DudsAndPasswordCount(ScienceLvl, TerminalLvl){
  if (TerminalLvl == 100 && ScienceLvl == 100)
  return 13;
else
  {
    let scienceOffset = ScienceLvl - TerminalLvl;
    let lockOffset = 100 - TerminalLvl;
    let WordsMult = lockOffset != 0 ? (scienceOffset / lockOffset) : 0.5;
    return Math.floor((1 - WordsMult) * (iHackingMaxWords - iHackingMinWords)) + iHackingMinWords;
  }
}
//Длина паролей
function setPasswordLength(){
  PasswordLength = 4 + 2 * (TerminalLevel / 25) + rnd.Next(0, 2);
  PasswordLength = this.PasswordLength > 12 ? 12 : this.PasswordLength;
}
//Инициализация таблицы слов
function GenerateWordsTable(){
  for (let i = 0; i < DumpHeight * DumpWidth; i++) {
    WordsTable[i] = TrashChars[getRandomInt(TrashChars.length)]
  }
}
//Глобальные координаты из плоских
function dumpCursorToGlobalXY(i){
  let x;
  let y;
  if (Math.floor(i/DumpWidth)<DumpHeight/2) {
    x=7+i % DumpWidth;
    y=5+Math.floor(i/DumpWidth);
  }
  else{
    x=6+i % DumpWidth + DumpWidth + 6+2+1;
    y=5 + Math.floor(i/DumpWidth-(DumpHeight/2));
  }
return{x,y}
}
//Плоский курсор из глобального
function globalXYToFlatCursor(GlobalXY){
  let xy = {x:Math.floor(GlobalXY.x/char_width),y:Math.floor(GlobalXY.y/char_height)};
  let toFlat = {x:0,y:0};
  if (xy.y>4) {
    if (xy.x>6 && xy.x<19 || xy.x>26 && xy.x<39) {
      //console.log(xy);
      toFlat.y=xy.y-5;
      if (xy.x>6 && xy.x<19) {
        toFlat.x = xy.x - 7;
      } else if (xy.x>26 && xy.x<39){
        toFlat.x = xy.x - 27;
        toFlat.y+=Math.floor(DumpHeight/2);
      }
      CursorFlat = toFlat.y*DumpWidth+toFlat.x;
      //console.log(toFlat);
    }
  }
}
//Подсветка выделеного слова
function placeHighlightingWord(i){
  let j=0;
  for (let k = 0; k < i; k++) {
    for (let t = 0; t < WordsTable[k].length; t++) {
      j++;
    }
  }
  for (let index = j; index < j+WordsTable[i].length; index++) {
    let xy = dumpCursorToGlobalXY(index);
    let char = getChar(xy.x, xy.y);
    let bkColor = char.bkColor;
    let color = char.color;
    placeText(xy.x, xy.y, char.char, color, bkColor);
  }
}
//Подсветка выделеной ячейки
function placeHighlightingCell(i){
    let xy = dumpCursorToGlobalXY(i);
    let char = getChar(xy.x, xy.y);
    let bkColor = char.bkColor;
    let color = char.color;
    placeText(xy.x, xy.y, char.char, color, bkColor);

}
//Размещение кучи слов и символов
function placeWordsTable(){
  let i = 0;
  
  for (let j = 0; j < WordsTable.length; j++) {
    for (let k = 0; k < WordsTable[j].length; k++) {
      
      if (Math.floor(i/DumpWidth)<DumpHeight/2) {
        placeText(7+i % DumpWidth,5+Math.floor(i/DumpWidth),WordsTable[j][k]);
      }
      else{
        placeText(6+i % DumpWidth + DumpWidth + 6+2+1,5 + Math.floor(i/DumpWidth-(DumpHeight/2)),WordsTable[j][k]);
      }
      i++;
    }
    
  }
  
}
//Проверка слова под курсором
function CheckWord(){
  if (mouseDown === true) {
    mouseDown = false;
    IOLog.push(WordsTable[CursorWordIndex]);
    CurrentAttempts--;
    
  }
}
//Размещение лога в матрицу консоли
function placeIOLog(){
  if (IOLog.length > 0){
  flushRect(40, 0, 14, TerminalHeight - 2);
  
  for (let i = IOLog.length-1; i >= 0 && (IOLog.length-i<16) ; i--) {
    placeText(40,20-(IOLog.length-i),">"+IOLog[i]);
  }
  }
}

//Случайные цифры по всей матрице консоли
function change() {
  for (let fx = 0; fx < TerminalWidth; fx++) {
    for (let fy = 0; fy < TerminalHeight; fy++) {
      chars[fx][fy].char = TrashChars[getRandomInt(TrashChars.length)];
    }
  }
}
//Размещение текста в матрицу консоли
function placeText(x,y,str, 
  bkColor="#"+(40).toString(16).padStart(2,'0')+(40).toString(16).padStart(2,'0')+(40).toString(16).padStart(2,'0'), 
  color="#"+(255).toString(16).padStart(2,'0')+(176).toString(16).padStart(2,'0')+(0).toString(16).padStart(2,'0')){
  for (let i = 0; i < str.length; i++){ 
    if (y<TerminalHeight && y >=0){
      if (x+i<TerminalWidth && x+i >=0){
        chars[x+i][y].char = str[i];
        chars[x+i][y].bkColor = bkColor;
        chars[x+i][y].color = color;
      }
    }
  }
}
function getChar(x,y){
  return chars[x][y];
}
//Отрисовать всю матрицу консоли
function DrawChars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let fx = 0; fx < TerminalWidth; fx++) {
    for (let fy = 0; fy < TerminalHeight; fy++) {
      
      ctx.beginPath();
      ctx.rect(chars[fx][fy].canvas_x, chars[fx][fy].canvas_y, char_width, char_height);
      ctx.fillStyle = chars[fx][fy].bkColor;
      ctx.fill();
      ctx.font = "bold 28px monospace";//32
      ctx.textBaseline="bottom";
      ctx.fillStyle = chars[fx][fy].color;
      ctx.fillText(chars[fx][fy].char, chars[fx][fy].canvas_x, chars[fx][fy].canvas_y+char_height);
      ctx.closePath();
    }
  }
}
//Индекс слова под плоским курсором
function CursorWordIndexMath(){
  let len = 0;
  for (let i = 0; i < WordsTable.length; i++) {
    for (let c = 0; c < WordsTable[i].length && len <= CursorFlat; c++) {
      CursorWordIndex = i;
      len++;
    }
     
  }
}

//Компоновка и отрисовка всего окна///////////////////////////////////////////////////
function draw(){
  flushRect(0,0,TerminalWidth,TerminalHeight);
  CursorWordIndexMath();
  PlaceHackHeader();
  PlaceHexAddresses();
  placeWordsTable();
  placeHighlightingWord(CursorWordIndex);

  placeIOLog();
  placeChoosenWord()
  DrawChars();
}
//Установка хексов
function setHexAddresses(){
  let OffsetInc = DumpWidth;
  let OffsetMin = Math.floor(61440 / 12) * 12;
  let OffsetMax = Math.floor(65139 / 12) * 12;
  let OffsetStart = OffsetMin + Math.floor(getRandomInt(OffsetMax - OffsetMin)/12)*12;
  for (let i = 0; i < DumpHeight; i++) {
    HexAddresses[i] = "0x"+(OffsetStart + (i*OffsetInc)).toString(16).toUpperCase();
    
  }
}
//Размещение заголовка и попыткок
function PlaceHackHeader(){
  placeText(0,0,"robco industries (tm) termlink protocol".toUpperCase());
  if (CurrentAttempts>1) {
    placeText(0,1,"enter password now".toUpperCase());
  }
  else{
    placeText(0,1,"!!! warning: lockout imminent !!!".toUpperCase());
  }
  let squares="";
  for (let i = 0; i < CurrentAttempts; i++) {
    squares+="■ ";
  }
  placeText(0,3,CurrentAttempts + " attempt(s) left: ".toUpperCase()+squares);
  
  placeText(40,21,">");
}
//Размещение хексов
function PlaceHexAddresses(){
  let i = 0;
  HexAddresses.forEach(element => {
    if (i<DumpHeight/2) {
      placeText(0,5+i,HexAddresses[i]);
    } else
    {
      placeText(6+2+DumpWidth,5+i-DumpHeight/2,HexAddresses[i]);
    }
    
    i++;
  });
  
}
//Размещение выбранного слова в поле ввода
function placeChoosenWord(){
  flushRect(41,21,13,1);
  placeText(41,21,WordsTable[CursorWordIndex])
}
//Ловим мышку//////////////////////////////////////////////////////////////////
canvas.addEventListener('mousemove', function (e) {
  let rect = canvas.getBoundingClientRect();
  let xy = {x:e.clientX - rect.left, y:e.clientY - rect.top};
  globalXYToFlatCursor(xy);
});
canvas.addEventListener('mousedown', function (e) {
  let rect = canvas.getBoundingClientRect();
  let xy = {x:e.clientX - rect.left, y:e.clientY - rect.top};
  if (mouseDown === false) {
    mouseDown = true;
  }
  globalXYToFlatCursor(xy);
  CheckWord();
});
//////////////////////////////////////////////////////////////
//ИНИЦИАЛИЗАЦИИ ВСЯЧЕСКИЕ:////////////////////////////////////////////////////
chars_init();
setHexAddresses();
GenerateWordsTable();
WordCount = DudsAndPasswordCount(75, 50);
//КОНЕЦ ИНИЦИАЛИЗАЦИЙ.

const drawing = setInterval(draw, 16); //обвновляем всю консоль в 60 к/с.





const array1 = [5, 12, 8, "130", 44];

const found = array1.find(element => element == 130);

