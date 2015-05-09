var psiResults;

psiResults = {
    "kind": "pagespeedonline#result",
    "id": "/speed/pagespeed",
    "responseCode": 200,
    "title": "PageSpeed Home",
    "score": 90,
    "pageStats": {
        "numberResources": 22,
        "numberHosts": 7,
        "totalRequestBytes": "2761",
        "numberStaticResources": 16,
        "htmlResponseBytes": "91981",
        "cssResponseBytes": "37728",
        "imageResponseBytes": "13909",
        "javascriptResponseBytes": "247214",
        "otherResponseBytes": "8804",
        "numberJsResources": 6,
        "numberCssResources": 2
    },
    "formattedResults": {
        "locale": "en_US",
        "ruleResults": {
            "AvoidBadRequests": {
                "localizedRuleName": "Avoid bad requests",
                "ruleImpact": 0.0
            },
            // ...
            "MinifyJavaScript": {
                "localizedRuleName": "Minify JavaScript",
                "ruleImpact": 0.1417,
                "urlBlocks": [{
                    "header": {
                        "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
                        "args": [{
                            "type": "BYTES",
                            "value": "1.3KiB"
                        }, {
                            "type": "INT_LITERAL",
                            "value": "0"
                        }]
                    },
                    "urls": [{
                            "result": {
                                "format": "Minifying $1 could save $2 ($3% reduction).",
                                "args": [{
                                    "type": "URL",
                                    "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
                                }, {
                                    "type": "BYTES",
                                    "value": "717B"
                                }, {
                                    "type": "INT_LITERAL",
                                    "value": "1"
                                }]
                            }
                        },
                        // ...
                        {
                            "result": {
                                "format": "Minifying $1 could save $2 ($3% reduction).",
                                "args": [{
                                    "type": "URL",
                                    "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
                                }, {
                                    "type": "BYTES",
                                    "value": "258B"
                                }, {
                                    "type": "INT_LITERAL",
                                    "value": "0"
                                }]
                            }
                        }
                    ]
                }]
            },
            // ...
            "SpriteImages": {
                "localizedRuleName": "Combine images into CSS sprites",
                "ruleImpact": 0.0
            }
        }
    },
    "version": {
        "major": 1,
        "minor": 11
    }
};

function totalBytes(psiResults) {
    var keysIndex = [];
    var adder = [];
    keysIndex = Object.keys(psiResults.pageStats);
    var pageStatsIndex = psiResults.pageStats;
    var matchesFound = [];
    for (var i = 0; i < keysIndex.length; i++) {

        var searchString = /Bytes/g; // /(chapter \d+(\.\d)*)/i; // 

        var found = keysIndex[i].match(searchString);
        if (found !== null) {
            matchesFound.push(keysIndex[i]);
        }
    }
    var additions = 0;
    for (var j = 0; j < matchesFound.length; j++) {
        var keyName = matchesFound[j];

        var valueAsNumber = parseInt(pageStatsIndex[keyName]);
        console.log(matchesFound[j] + ': ' + pageStatsIndex[keyName]);
        additions = additions + valueAsNumber;
    }
    console.log('adds up to ' + additions);
    return additions;

}

function ruleList(psiResults) {
    var keysIndex2 = [];
    keysIndex2 = Object.keys(psiResults.formattedResults.ruleResults);
    return keysIndex2;

}
totalBytes(psiResults);
ruleList(psiResults);