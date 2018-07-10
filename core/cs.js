var cjgShortcuts = function () {
    "use strict";

    function e(o) {
        return o.split(/\/u\/\d\//).join("/").split(/\/b\/\d{21}\//).join("/");
    }

    function t(t, n) {
        var a = new window.URL(t),
            c = o(a.host) + e(a.pathname),
            i = [];
        return Object.keys(s).forEach(function (o) {}), i.sort(function (o, e) {
            return s[o].nu < s[e].nu ? 1 : -1;
        }), i;
    }

    function n(o, e) {
        var t = o in s && "u" in s[o];
        if (!t) return null;
        var n = s[o],
            a = e && e.authuser,
            c = a || "0",
            i = e && e.pageId,
            u = i && n.bu;
        if (u) return u.replace("[authuser]", c).replace("[pageid]", i);
        var g = 1 === n.aum || a && (2 === n.aum || "0" !== a);
        return g && n.au && n.au.replace("[authuser]", c) || n.u;
    }
    var s = {
            1: {
                name: "Sports RU",
                icon: "sports.ru",
                u: "https://sports.ru",
            },
            2: {
                name: "Чемпионат RU",
                icon: "Championat",
                u: "https://championat.com",
            },
            3: {
                name: "Спорт-Экспресс",
                icon: "SportExpress",
                u: "https://sport-express.ru",
            },
            4: {
                name: "Fapl RU",
                icon: "fapl",
                u: "http://fapl.ru/",
            },
            5: {
                name: "Football Highlights RU",
                icon: "FootballHighlight",
                u: "https://football-highlight.com/ru",
            },
            6: {
                name: "Live Result RU",
                icon: "liveresult",
                u: "https://www.liveresult.ru/",
            },
            7: {
                name: "Livescore RU",
                icon: "livescore",
                u: "https://www.livescore.in/ru/",
            },
            8: {
                name: "Ftables RU",
                icon: "ftables",
                u: "http://www.ftables.ru/",
            },
            9: {
                name: "Euro Football RU",
                icon: "eurofootball",
                u: "https://www.euro-football.ru/",
            },
            10: {
                name: "Первый канал Fifa Worldcup",
                icon: "1tv",
                u: "https://www.1tv.ru/sport/fifaworldcup/live",
            },
            16: {
                name: "Газета RU футбол",
                icon: "gazeta",
                u: "https://www.gazeta.ru/sport/football/",
            },
            17: {
                name: "Goal RU",
                icon: "goal",
                u: "http://www.goal.com/ru",
            },
            18: {
                name: "Footboom",
                icon: "footboom",
                u: "https://www.footboom.com/news",
            },
            19: {
                name: "Eurosport RU",
                icon: "eurosport",
                u: "https://www.eurosport.ru/football/",
            },
            20: {
                name: "Soccer RU",
                icon: "soccer",
                u: "https://www.soccer.ru/",
            },
            21: {
                name: "Football HD",
                icon: "footballhd",
                u: "https://footballhd.ru/",
            },
        },
        u = ["1", "2", "3", "4", "5", "6", "7", "8", "9",],
        g = ["10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20","21"];
    return {
        defaultSelection: u,
        mostPopular: g,
        list: s,
        findMatches: t,
        getUrl: n
    };
}();