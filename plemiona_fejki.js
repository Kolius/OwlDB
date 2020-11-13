// ----------------------------------------------------------
// ==UserScript==
// @name    	Fejk od tak
// @version 	1.0
// @author  	Puchacz Tha K1ng
// @include   	 http*://pl*.plemiona.pl/game.php?village=*&screen=place*
// @include   	 http*://pl*.plemiona.pl/game.php?screen=place*
// ==/UserScript==
// --------------------------------------------------------------//


javascript: var HermitowskieFejki = {
omitNightBonus: 'true',
coords: '716|593 715|600 714|603 714|590 712|599 712|597 712|595 711|611 711|610 710|599 710|594 709|599 708|600 708|592 707|609 707|601 707|600 707|598 707|590 706|611 706|610 706|609 706|600 706|599 706|596 706|595 706|591 705|610 705|607 705|602 705|594 704|604 704|602 704|592 703|609 703|601 703|596 702|611 702|610 702|608 702|606 702|602 702|601 702|599 702|592 701|608 701|600 701|592 701|589 700|611 700|610 700|606 700|589 699|605 699|589 698|608 698|599 698|596 698|591 697|607 697|605 696|608 696|606 696|604 696|602 696|599 695|603 695|602 695|596 695|589 694|611 694|607 694|605 694|597 693|610 693|598 692|611 691|610 691|608 691|599 690|610 690|609 690|606 690|601 689|611 689|609 689|606 689|604 689|602 687|610 687|608 686|603 686|602 684|608 684|606 684|603 683|610 683|609 683|608 683|607 683|606 683|603 683|598 683|591 682|606 682|604 681|608 680|608 680|601 680|600 679|609 679|601 678|610 678|591 677|604 675|610 675|609 675|608 675|603 675|602 675|601 675|600 675|585 675|581 674|610 674|609 674|603 674|602 674|599 674|584 673|603 673|602 673|600 673|599 673|581 673|580 672|607 672|606 672|604 672|600 671|605 671|604 669|603 669|602 669|594 669|589 668|608 668|607 668|597 668|591 668|587 667|605 667|604 667|603 667|594 667|592 667|588 666|605 666|603 666|602 666|599 666|593 666|590 666|589 666|585 665|609 665|600 665|599 665|598 665|593 665|591 665|589 665|587 664|604 664|601 664|592 664|591 664|589 664|586 664|584 663|610 663|607 663|604 663|602 663|600 663|595 663|593 663|587 662|610 662|609 662|603 662|602 662|598 662|596 661|602 661|597 661|585 661|584 660|610 660|606 660|605 660|597 660|596 660|595 660|592 660|588 659|603 659|599 659|596 659|594 659|590 659|588 659|585 658|601 658|595 658|593 658|591 658|589 658|585 658|583 658|571 657|602 657|601 657|600 657|597 657|595 657|585 657|574 657|571 656|601 656|592 656|579 656|577 655|604 655|599 655|585 655|584 654|605 654|604 654|600 654|599 654|595 654|583 654|574 653|597 653|596 653|595 653|589 653|579 652|600 652|596 652|591 652|590 652|566 651|602 651|596 651|580 651|579 651|571 651|569 650|601 650|599 650|582 650|581 649|599 649|598 649|588 649|585 649|584 649|582 649|581 649|580 649|572 648|603 648|602 648|601 648|600 648|589 648|584 648|583 647|604 647|603 647|593 647|590 647|589 647|586 646|603 646|599 645|577 644|604 644|596 644|589 643|594 642|605 642|598 642|596 642|594 642|593 642|586 642|583 641|587 641|586 641|583 641|566 640|586 640|582 639|604 639|599 639|595 639|593 639|588 639|586 639|584 638|601 638|598 638|593 638|592 638|591 638|588 638|587 638|579 638|576 638|573 637|604 637|603 637|593 637|592 637|590 637|589 637|580 637|579 637|572 636|601 636|594 636|590 636|583 636|578 636|577 636|575 635|600 635|597 635|592 635|591 635|588 635|567 634|605 634|602 634|598 634|597 634|596 634|595 634|592 634|590 634|588 634|583 634|572 633|602 633|596 633|587 633|579 632|603 632|601 632|596 632|593 632|591 632|590 631|602 631|600 631|598 631|597 631|594 631|591 631|590 631|588 630|605 630|604 630|598 630|595 630|589 630|574 629|604 629|603 629|597 629|593 629|592 629|588 629|587 628|602 628|599 628|596 628|576 627|603 627|602 627|599 627|598 627|596 627|595 627|591 627|589 627|585 626|604 626|603 626|601 626|599 626|598 626|591 626|586 626|574 626|570 625|604 625|603 625|601 625|599 625|588 625|578 624|603 624|600 624|595 624|583 623|604 623|603 623|590 623|583 623|574 623|566 622|604 622|603 622|600 622|599 622|598 622|597 622|591 622|590 622|585 622|579 622|575 622|567 621|601 621|599 621|598 621|589 620|604 620|601 620|600 620|599 620|598 620|590 620|589 619|600 619|591 619|576 618|601 618|595 618|594 618|584 617|602 617|601 617|599 617|598 617|597 617|595 617|593 617|591 617|588 617|577 616|604 616|603 616|598 616|576 615|589 615|587 615|586 615|585 614|603 614|602 614|597 614|581 613|603 613|602 613|601 611|599 610|604 610|603 610|602 610|600 610|591 609|604 609|601 609|597 609|593 608|604 608|599 608|597 608|594 608|593 607|603 607|593 607|592 606|603 606|602 606|601 606|600 606|592 605|602 605|596 604|598 603|602 603|600 602|603 602|601 602|600 602|595 602|594 601|602 601|600 600|597 600|594 599|600 599|599 599|598 623|592 622|592 621|593 619|595 616|589 615|592 615|590 614|592 603|604 600|603 662|584 661|587 658|582 657|583 656|582 654|586 654|585 653|588 653|586 653|584 653|574 653|573 653|572 652|588 652|587 652|585 652|583 650|588 650|587 650|586 650|578 649|592 649|586 648|588 647|588 647|587 646|605 646|594 645|594 644|603 644|601 644|593 643|603 643|593 642|602 642|601 642|597 641|601 641|600 640|602 640|593 640|592 638|600 636|588 635|604 635|603 635|589 633|603 631|605 629|596 629|595 629|594 628|604 628|601 627|592 625|602 625|596 623|594 623|593 620|594',
days: '13-20',
intervals: '7:00-23:55',
templates: [
{axe:25, light:10, spy:1, ram:1},
{axe:25, light:10, spy:1, ram:1},
{spy:10, ram:1},
{spy:10, catapult:1},
{ram:1},
{catapult:1},
],
fillWith: 'axe,light,spy,sword,archer,spear,ram,catapult',
fillExact: 'false',
skipVillages: 'true',
safeguard: {},
localContext: '5',
};



/*
 * Selecting troops and coordinates based on many factors
 * Created by: Hermitowski
 * Modified on: 13/02/2017 - version 2.2 - added targeting specific players/allies
 * Modified on: 14/02/2018 - version 2.3 - added minimum village points threshold
 * Modified on: 08/03/2018 - version 2.4 - added omitting recently selected villages for a short period of time
 * Modified on: 14/03/2018 - version 2.4 - improved performance
 * Modified on: 25/04/2018 - version 2.5 - added omitting recently selected villages in global context
 * Modified on: 26/04/2018 - version 2.5 - improved 'skip village' logic
 * Modified on: 26/04/2018 - version 2.6 - minor changes to selecting based on player/allies names
 * Modified on: 14/06/2018 - version 2.7 - added distance option
 * Modified on: 01/08/2018 - version 2.8 - added safeguard option
 * Modified on: 04/08/2018 - version 2.9 - redesign of contexts
 * Modified on: 04/08/2018 - version 2.10 - added bounding boxes
 * Modified on: 04/08/2018 - version 2.11 - added 'excludeCoords'
 * --- VERSION 3.0 ---
 * Modified on: 29/08/2018 - version 3.0a - major cleanup
 * Modified on: 03/05/2019 - blocking the selection of more than one village of the same player in local context
 * Modified on: 11/10/2019 - using new map files script
 */


function Faking() {
    const i18n = {
        DOWNLOADING_SCRIPT: 'Pobieranie skryptu... ',
        ERROR_MESSAGE: 'Komunikat o b\u{142}\u{119}dzie: ',
        FORUM_THREAD: 'Link do w\u{105}tku na forum',
        FORUM_THREAD_HREF: 'https://forum.plemiona.pl/index.php?threads/hermitowskie-fejki.125294/',
        VILLAGE_OUT_OF_GROUP: 'Wioska poza grup\u{105}. Przechodz\u{119} do nast\u{119}pnej wioski z grupy',
        MISSING_CONFIGURATION: 'Brak konfiguracji u\u{17C}ytkownika',
        BAD_SCREEN: 'Nie jeste\u{15B}  na placu',
        BLOCKED_SCREEN: 'Skrypt jest zablokowany w tym przegl\u{105}dzie',
        INSUFFICIENT_TROOPS: 'Nie uda si\u{119} wybra\u{107} wystarczaj\u{105}cej liczby jednostek',
        NO_TROOPS_SELECTED: 'Wydaje si\u{119}, \u{17C}e obecne ustawienia nie pozwalaj\u{105} na wyb\u{F3}r jednostek',
        COORDS_EMPTY: 'Pula wiosek jest pusta',
        COORDS_EMPTY_SNOBS: 'Pula wiosek le\u{17C}y poza zasi\u{119}iem szlachcic\u{F3}w',
        COORDS_EMPTY_TIME: 'Pula wiosek jest pusta z powodu wybranych ram czasowych',
        COORDS_EMPTY_CONTEXTS: 'W puli wiosek zosta\u{142}y tylko wioski, kt\u{F3}re zosta\u{142}y wybrane chwil\u{119} temu',
        NO_MORE_UNIQUE_PLAYERS: 'W puli wiosek zosta\u{142}y tylko wioski, kt\u{F3}re nale\u{17C}\u{105} do ostatnio wybranych graczy',
        ATTACK_TIME: 'Wojsko dojdzie __DAY__.__MONTH__ na __HOURS__:__MINUTES__',
        UNKNOWN_UNIT: 'Podana jednostka nie istnieje: __UNIT_NAME__',
        UNKNOWN_OPTION: 'Nieznana opcja: __PROPERTY__',
        NONEXISTENT_UNIT: 'Podana jednostka nie wyst\u{119}puje na tym \u{15B}wiecie: __UNIT_NAME__',
        INVALID_SETTINGS_SAFEGUARD: 'Ustawienia > safeguard > __UNIT_NAME__  : __VALUE__',
        INVALID_SETTINGS_TEMPLATES: 'Ustawienia > templates > __UNIT_NAME__  : __VALUE__',
        INVALID_SETTINGS_DAYS: 'Ustawienia > days > __VALUE__',
        INVALID_SETTINGS_INTERVALS: 'Ustawienia > intervals > __VALUE__',
        INVALID_SETTINGS_BOUNDING_BOXES: 'Ustawienia > boundingBoxes > __VALUE__',
    };

    UI.SuccessMessage(i18n.DOWNLOADING_SCRIPT);
    $.ajax({
        url: 'https://media.innogamescdn.com/com_DS_PL/skrypty/HermitowskiePlikiMapy.js?_=' + ~~(Date.now() / 9e6),
        dataType: 'script',
        cache: true
    }).then(() => {
        ExecuteScript();
    });

    return true;

    function ExecuteScript() {
        get_world_info({ configs: ['unit_info', 'config'] }).then(worldInfo => {
            if (worldInfo.error !== undefined) {
                // some failure getting worldInfo data, e.g. QUOTA
                throw worldInfo.error;
            }
            CreateFaker(worldInfo).init();
        }).catch(HandleError);
    }

    function HandleError(error) {
        const gui =
            `<h2>WTF - What a Terrible Failure</h2>
             <p><strong>${i18n.ERROR_MESSAGE}</strong><br/>
                <textarea rows='5' cols='42'>${error}\n\n${error.stack}</textarea><br/>
                <a href="${i18n.FORUM_THREAD_HREF}">${i18n.FORUM_THREAD}</a>
             </p>`;
        Dialog.show('scriptError', gui);
    }

    function CreateFaker(worldInfo) {
        return {
            _owner: 699198069,
            _settings: {},
            _fakeLimit: worldInfo.config.game.fake_limit,
            _defaultSettings: {
                omitNightBonus: 'true',
                coords: '',
                // players: '',
                days: '1-31',
                intervals: '0:00-23:59',
                templates: [
                    { spy: 1, ram: 1 },
                    { spy: 1, catapult: 1 },
                    { ram: 1 },
                    { catapult: 1 }
                ],
                fillWith: 'spear,sword,axe,archer,spy,light,marcher,heavy,ram,catapult',
                fillExact: 'false',
                skipVillages: 'true',
                safeguard: {},
                localContext: '0',
                // customContexts: '',
                // boundingBoxes: [],
                // targetUniquePlayers: false
            },
            _localContextKey: `HermitowskieFejki_${game_data.village.id}`,
            _cache_control_key: `HermitowskieFejki_CacheControl`,
            _now: Date.now(),
            init: function () {
                try {
                    this.checkConfig();
                    this.invalidateCache();
                    this.checkScreen();
                    let troops = this.selectTroops();
                    let target = this.selectTarget(troops);
                    this.displayTargetInfo(troops, target);
                } catch (err) {
                    UI.ErrorMessage(err, '1e3');
                }
            },
            checkConfig: function () {
                if (typeof (HermitowskieFejki) === 'undefined')
                    throw i18n.MISSING_CONFIGURATION;
                this._fixConfig(HermitowskieFejki);
            },
            invalidateCache() {
                let cacheControl = this._getCacheControl();
                for (const key in cacheControl) {
                    if (cacheControl.hasOwnProperty(key)) {
                        if (cacheControl[key] < this._now) {
                            let timestamp = this._invalidateItem(key);
                            if (timestamp === 0) {
                                delete cacheControl[key];
                            }
                            else {
                                cacheControl[key] = timestamp;
                            }
                        }
                    }
                }
                localStorage.setItem(this._cache_control_key, JSON.stringify(cacheControl));
            },
            checkScreen: function () {
                if ($('.jump_link').length) {
                    this.goToNextVillage(i18n.VILLAGE_OUT_OF_GROUP);
                }
                if (game_data.screen !== 'place' || $('#command-data-form').length !== 1) {
                    location = TribalWars.buildURL('GET', 'place', { mode: 'command' });
                    throw i18n.BAD_SCREEN;
                }
                // disable executing script on screen with command confirmation
                if ($('#troop_confirm_go').length !== 0) {
                    throw i18n.BLOCKED_SCREEN;
                }
            },
            goToNextVillage: function (message) {
                if (this._toBoolean(this._settings.skipVillages)) {
                    let switchRight = $('#village_switch_right')[0];
                    let jumpLink = $('.jump_link')[0];
                    if (switchRight) {
                        location = switchRight.href;
                    }
                    else if (jumpLink) {
                        location = jumpLink.href;
                    }
                }
                throw message;
            },
            selectTroops: function () {
                this._clearPlace();
                let place = this._getAvailableUnits();

                for (let template of this._settings.templates) {
                    this._validateTemplate(template);
                    if (this._isEnough(template, place)) {
                        if (this._fill(template, place)) {
                            return template;
                        }
                    }
                }
                this.goToNextVillage(i18n.INSUFFICIENT_TROOPS);
            },
            selectTarget: function (troops) {
                let slowest = this._slowestUnit(troops);
                let poll = this._sanitizeCoordinates(this._settings.coords);
                // poll = this._targeting(poll);
                poll = this._removeUnreachableVillages(poll, troops, slowest);
                poll = this._applyLocalContext(poll);
                //poll = this._applyCustomContexts(poll);
                poll = this._targetUniquePlayers(poll);
                return this._selectCoordinates(poll);
            },
            displayTargetInfo: function (troops, target) {
                let defaultTargetInput = $('.target-input-field');
                if (defaultTargetInput.length === 1) {
                    defaultTargetInput.val(target);
                }
                else { // mobile devices
                    $('#inputx').val(target.split('|')[0]);
                    $('#inputy').val(target.split('|')[1]);
                }
                this._selectUnits(troops);
                let arrivalTime = this._calculateArrivalTime(target, this._slowestUnit(troops));
                let attack_time = i18n.ATTACK_TIME
                    .replace('__DAY__', this._twoDigitNumber(arrivalTime.getDate()))
                    .replace('__MONTH__', this._twoDigitNumber(arrivalTime.getMonth() + 1))
                    .replace('__HOURS__', this._twoDigitNumber(arrivalTime.getHours()))
                    .replace('__MINUTES__', this._twoDigitNumber(arrivalTime.getMinutes()));
                UI.SuccessMessage(attack_time);
            },
            _removeUnreachableVillages: function (poll, troops, slowest) {
                if (troops.hasOwnProperty('snob') && Number(troops.snob) > 0) {
                    let max_dist = Number(worldInfo.config.snob.max_dist);
                    poll = poll.filter(coords =>
                        this._calculateDistanceTo(coords) <= max_dist
                    );
                    if (poll.length === 0) {
                        this.goToNextVillage(i18n.COORDS_EMPTY_SNOBS);
                    }
                }

                poll = poll.filter(coordinates =>
                    this._checkConstraints(this._calculateArrivalTime(coordinates, slowest))
                );
                if (poll.length === 0) {
                    this.goToNextVillage(i18n.COORDS_EMPTY_TIME);
                }

                return poll;
            },
            _invalidateItem: function (key) {
                let items = localStorage.getItem(key);
                items = JSON.parse(items);
                items = items.filter(item => item[1] > this._now);
                if (items.length === 0) {
                    localStorage.removeItem(key);
                    return 0;
                }
                localStorage.setItem(key, JSON.stringify(items));
                return Math.min(...items.map(item => item[1]));
            },
            _twoDigitNumber: function (number) {
                return `${Number(number) < 10 ? '0' : ''}${number}`;
            },
            _sanitizeCoordinates: function (coordinates) {
                let coordsRegex = new RegExp(/\d{1,3}\|\d{1,3}/g);
                let match = coordinates.match(coordsRegex);
                return match == null
                    ? []
                    : match;
            },
            _checkConstraints: function (arrivalTime) {
                let daysIntervals = this._settings.days.split(',');
                /* daysIntervals: ['1-23','23-30'], */
                let hoursIntervals = this._settings.intervals.split(',');
                /* hoursIntervals: ['7:00-8:00','23:00-23:59'], */
                if (this._isInInterval(arrivalTime, daysIntervals, this._parseDailyDate) === false) {
                    return false;
                }
                if (this._toBoolean(this._settings.omitNightBonus) && this._isInNightBonus(arrivalTime)) {
                    return false;
                }
                return this._isInInterval(arrivalTime, hoursIntervals, this._parseTime);
            },
            _isInNightBonus: function (arrivalTime) {
                if (!worldInfo.config.night.active) {
                    return false;
                }
                let timeInterval = [
                    `${worldInfo.config.night.start_hour}:00-${worldInfo.config.night.end_hour}:00`
                ];
                return this._isInInterval(arrivalTime, timeInterval, this._parseTime);
            },
            _selectCoordinates: function (poll) {
                let target = poll[Math.floor(Math.random() * poll.length)];
                // this._save(target);
                return target;
            },
            _clearPlace: function () {
                $('[id^=unit_input_]').val('');
                let defaultTargetInput = $('.target-input-field');

                if (defaultTargetInput.length === 1) {
                    defaultTargetInput.val('');
                }
                else { // mobile devices
                    $('#inputy').val('');
                    $('#inputx').val('');
                }
            },
            _selectUnit: function (unitName, unitCount) {
                if (worldInfo.unit_info.hasOwnProperty(unitName) === false) {
                    throw i18n.UNKNOWN_UNIT.replace('__UNIT_NAME__', unitName);
                }
                let input = this._getInput(unitName);
                let maxUnitCount = Number(input.attr('data-all-count'));
                let selectedUnitCount = Number(input.val());
                unitCount = Math.min(maxUnitCount, selectedUnitCount + unitCount);
                input.val(unitCount === 0 ? '' : unitCount);
            },
            _selectUnits: function (units) {
                for (const unitName in units) {
                    if (units.hasOwnProperty(unitName))
                        this._selectUnit(unitName, units[unitName]);
                }
            },
            _countPopulations: function (units) {
                let sum = 0;
                for (const unitName in units) {
                    if (units.hasOwnProperty(unitName)) {
                        let pop = Number(worldInfo.unit_info[unitName].pop);
                        let quantity = units[unitName];
                        sum += pop * quantity;
                    }
                }
                return sum;
            },
            _getFillTable: function () {
                let entries = this._settings.fillWith.split(',');
                let fillTable = [];
                for (const entry of entries) {
                    let name = entry;
                    let quantity = 1e9;
                    if (name.indexOf(':') !== -1) {
                        let parts = entry.split(':');
                        name = parts[0];
                        quantity = Number(parts[1]);
                    }
                    name = name.trim();
                    fillTable.push([name, quantity]);
                }
                return fillTable;
            },
            _fill: function (template, place) {
                let left = Math.floor(game_data.village.points * Number(this._fakeLimit) * 0.01);
                left -= this._countPopulations(template);
                if ((left <= 0 || !this._shouldApplyFakeLimit(template)) && !this._toBoolean(this._settings.fillExact)) {
                    return true;
                }
                let fillTable = this._getFillTable();
                for (const entry of fillTable) {
                    let name = entry[0];
                    if (!worldInfo.unit_info.hasOwnProperty(name)) continue;
                    let minimum = entry[1];
                    let pop = Number(worldInfo.unit_info[name].pop);
                    if (!this._toBoolean(this._settings.fillExact)) {
                        if (name === 'spy' &&
                            game_data.units.filter(unit => unit !== 'spy').every(unit => Number(template[unit]) > 0)) {
                            let spies = (template['spy']) ? Number(template['spy']) : 0;
                            minimum = Math.min(minimum, Math.ceil(left / pop), 5 - spies);
                        } else {
                            minimum = Math.min(minimum, Math.ceil(left / pop));
                        }
                    }
                    let selected = 0;
                    if (!!template[name]) {
                        selected = template[name];
                    }
                    minimum = Math.min(place[name] - selected, minimum);
                    if (!template[name]) {
                        template[name] = minimum;
                    }
                    else {
                        template[name] += minimum;
                    }
                    left -= minimum * pop;
                    if ((left <= 0 || !this._shouldApplyFakeLimit(template)) && !this._toBoolean(this._settings.fillExact)) {
                        break;
                    }
                }
                return left <= 0 || !this._shouldApplyFakeLimit(template);
            },
            _slowestUnit: function (units) {
                let speed = 0;
                for (const unitName in units) {
                    if (units.hasOwnProperty(unitName) && units[unitName] !== 0) {
                        speed = Math.max(Number(worldInfo.unit_info[unitName].speed), speed);
                    }
                }
                if (speed === 0) {
                    throw i18n.NO_TROOPS_SELECTED;
                }
                return speed;
            },
            _fixConfig: function (userConfig) {
                // check if user have only valid settings

                for (let property in userConfig) {
                    if (!this._defaultSettings.hasOwnProperty(property)) {
                        throw i18n.UNKNOWN_OPTION.replace('__PROPERTY__', property);
                    }
                }

                // overwrite default values with user defined
                for (let property in this._defaultSettings) {
                    if (this._defaultSettings.hasOwnProperty(property)) {
                        this._settings[property] = JSON.parse(JSON.stringify(
                            (userConfig[property] === undefined)
                                ? this._defaultSettings[property]
                                : userConfig[property]
                        ));
                    }
                }
            },
            _toBoolean: function (input) {
                if (typeof (input) === 'boolean') {
                    return input;
                }
                if (typeof (input) === 'string') {
                    return input.trim().toLowerCase() === 'true';
                }
                return false;
            },
            _calculateDistanceTo: function (target) {
                let dx = game_data.village.x - Number(target.split('|')[0]);
                let dy = game_data.village.y - Number(target.split('|')[1]);
                return Math.hypot(dx, dy);
            },
            _calculateArrivalTime: function (coordinates, slowestUnitSpeed) {
                let distance = this._calculateDistanceTo(coordinates);
                let timePerField = slowestUnitSpeed * 60 * 1000;
                return new Date(distance * timePerField + this._now);
            },
            _getInput: function (unitName) {
                let input = $(`#unit_input_${unitName}`);
                if (input.length === 0) {
                    throw i18n.NONEXISTENT_UNIT.replace('__UNIT_NAME__', unitName);
                }
                return input;
            },
            _isInInterval: function (value, intervals, predicate) {
                for (let i = 0; i < intervals.length; i++) {
                    if (predicate(value, intervals[i])) {
                        return true;
                    }
                }
                return false;
            },
            _parseDailyDate: function (value, interval) {
                let error = i18n.INVALID_SETTINGS_DAYS
                    .replace('__VALUE__', interval);
                let day = value.getDate();
                let range = interval.split('-');
                if (range.length !== 2) {
                    throw error;
                }
                let minDay = Number(range[0]);
                let maxDay = Number(range[1]);
                if (isNaN(minDay) || isNaN(maxDay)) {
                    throw error;
                }
                return minDay <= day && day <= maxDay;
            },
            _parseTime: function (value, interval) {
                let error = i18n.INVALID_SETTINGS_INTERVALS
                    .replace('__VALUE__', interval);
                let convertTimeToMinutes = time => {
                    let parts = time.split(':');
                    if (parts.length !== 2) {
                        throw error;
                    }
                    let hours = Number(parts[0]);
                    let minutes = Number(parts[1]);
                    if (isNaN(hours) || isNaN(minutes)) {
                        throw error;
                    }
                    return hours * 60 + minutes;
                };
                let minutes = value.getHours() * 60 + value.getMinutes();
                let range = interval.split('-');
                if (range.length !== 2) {
                    throw error;
                }
                return convertTimeToMinutes(range[0]) <= minutes && minutes <= convertTimeToMinutes(range[1]);
            },
            _getAvailableUnits: function () {
                let units = game_data.units.filter(unit => unit !== 'militia');
                let available = {};
                for (let unit of units) {
                    available[unit] = Number(this._getInput(unit).attr('data-all-count'));
                    if (this._settings.safeguard.hasOwnProperty(unit)) {
                        let threshold = Number(this._settings.safeguard[unit]);
                        if (isNaN(threshold) || threshold < 0) {
                            throw i18n.INVALID_SETTINGS_SAFEGUARD
                                .replace('__UNIT_NAME__', unit)
                                .replace('__VALUE__', this._settings.safeguard[unit]);
                        }
                        available[unit] = Math.max(0, available[unit] - threshold);
                    }
                }
                return available;
            },
            _isEnough: function (template, placeUnits) {
                for (let unit in template) {
                    if (template.hasOwnProperty(unit)) {
                        if (!worldInfo.unit_info.hasOwnProperty(unit) || template[unit] > placeUnits[unit])
                            return false;
                    }
                }
                return true;
            },
            _omitEmptyAndToLower: function (collection) {
                return collection
                    .map(name => name.trim())
                    .filter(name => name.length !== 0)
                    .map(name => name.toLowerCase());
            },
            _targeting: function (poll) {
                return poll;
                let players = this._omitEmptyAndToLower(this._settings.players.split(','));

                if (players.length === 0) {
                    return poll;
                }

                let playerIds = worldInfo.player.filter(p =>
                    players.some(target => target === p.name.toLowerCase())
                ).map(p => p.id);

                let villages = worldInfo.village.filter(v =>
                    playerIds.some(target => target === v.playerId)
                ).map(v => v.coords);

                villages = this._applyBoundingBoxes(villages);

                poll = [... new Set([...poll, ...villages])];
                if (poll.length === 0) {
                    this.goToNextVillage(i18n.COORDS_EMPTY);
                }
                return poll;
            },
            _save: function (coords) {
                this._saveEntry(coords, this._localContextKey, Number(this._settings.localContext));
                // let customContexts = this._getCustomContexts();
                // for (let customContext of customContexts) {
                //     this._saveEntry(coords, customContext.key, customContext.liveTime);
                // }
            },
            _saveEntry: function (coords, key, liveTime) {
                if (isNaN(liveTime)) {
                    return;
                }
                let expirationTime = this._now + liveTime * 60 * 1000;
                let recent = localStorage[key];
                recent = recent === undefined ? [] : JSON.parse(recent);
                recent.push([coords, expirationTime]);
                localStorage[key] = JSON.stringify(recent);
                this._updateCacheControl(key, expirationTime);
            },
            _updateCacheControl: function (key, expirationTime) {
                let cacheControl = this._getCacheControl();
                if (!cacheControl.hasOwnProperty(key) || cacheControl[key] > expirationTime) {
                    cacheControl[key] = expirationTime;
                    localStorage.setItem(this._cache_control_key, JSON.stringify(cacheControl));
                }
            },
            _getCacheControl: function () {
                let cacheControl = localStorage.getItem(this._cache_control_key);
                if (cacheControl == null) {
                    return {};
                }
                return JSON.parse(cacheControl);
            },
            _getCustomContexts: function () {
                return this._settings.customContexts.split(',')
                    .filter(value => value.length !== 0)
                    .map(entry => entry.split(":"))
                    .map(entry => {
                        return {
                            key: `HermitowskieFejki_${entry[0].trim()}`,
                            liveTime: Number(entry[1]),
                            countThreshold: entry.length == 2 ? 1 : Number(entry[2])
                        }
                    });
            },
            _applyLocalContext: function (poll) {
                let entry = typeof (this._settings.localContext) === 'string'
                    ? this._settings.localContext.split(':')
                    : [this._settings.localContext];
                poll = this._omitRecentlySelectedCoords(poll, {
                    key: this._localContextKey,
                    liveTime: Number(entry[0]),
                    countThreshold: entry.length == 1 ? 1 : Number(entry[1])
                });
                if (poll.length === 0) {
                    this.goToNextVillage(i18n.COORDS_EMPTY_CONTEXTS);
                }
                return poll;
            },
            _applyCustomContexts: function (poll) {
                let customContexts = this._getCustomContexts();
                for (let customContext of customContexts) {
                    poll = this._omitRecentlySelectedCoords(poll, customContext);
                }
                if (poll.length === 0) {
                    this.goToNextVillage(i18n.COORDS_EMPTY_CONTEXTS);
                }
                return poll;
            },
            _omitRecentlySelectedCoords: function (poll, context) {
                let coords = localStorage.getItem(context.key);
                if (coords === null) {
                    return poll;
                }
                coords = JSON.parse(coords);
                coords = this._filterCoordsByCount(coords.map(entry => entry[0]), context.countThreshold)
                return this._exclude(poll, coords);
            },
            _filterCoordsByCount: function (coords, countThreshold) {
                let map = new Map();
                for (const village of coords) {
                    if (map.has(village)) {
                        map.set(village, 1 + map.get(village));
                    }
                    else {
                        map.set(village, 1);
                    }
                }
                let result = [];
                map.forEach((count, village) => {
                    if (count < countThreshold) {
                        result.push(village);
                    }
                });
                return result;
            },
            _targetUniquePlayers: function (poll) {
                if (!this._settings.targetUniquePlayers) {
                    return poll;
                }

                let recentVillages = localStorage.getItem(this._localContextKey);

                if (recentVillages == null) {
                    return poll;
                }

                recentVillages = JSON.parse(recentVillages);

                const coords2village = new Map(worldInfo.village.map(x => [x.coords, x]));
                const recentPlayerIds = new Set([
                    ...recentVillages.map(v => coords2village.get(v[0]))
                        .filter(x => x)
                        .map(x => x.playerId)
                ]);

                poll = poll.map(x => coords2village.get(x))
                    .filter(x => x)
                    .filter(x => !recentPlayerIds.has(x.playerId))
                    .map(x => x.coords);

                if (poll.length === 0) {
                    throw i18n.NO_MORE_UNIQUE_PLAYERS;
                }
                return poll;
            },
            _exclude: function (poll, excluded) {
                let banned = new Set([...excluded]);
                return poll.filter(pollCoords => !banned.has(pollCoords));
            },
            _applyBoundingBoxes: function (poll) {
                if (this._settings.boundingBoxes.length === 0) {
                    return poll;
                }

                for (const boundingBox of this._settings.boundingBoxes) {
                    this._validateBoundingBox(boundingBox);
                }

                let coords = poll.map(c => {
                    let parts = c.split('|');
                    return {
                        x: Number(parts[0]),
                        y: Number(parts[1])
                    }
                });

                coords = coords.filter(c => {
                    return this._settings.boundingBoxes.some(boundingBox => {
                        return (boundingBox.minX <= c.x && c.x <= boundingBox.maxX) &&
                            (boundingBox.minY <= c.y && c.y <= boundingBox.maxY);
                    });
                });
                return coords.map(c => `${c.x}|${c.y}`);
            },
            _shouldApplyFakeLimit: function (units) {
                return game_data.units.filter(unit => unit !== 'spy').some(unit => Number(units[unit]) > 0) || units['spy'] < 5;
            },
            _validateTemplate(template) {
                for (const unit in template) {
                    if (template.hasOwnProperty(unit)) {
                        let count = Number(template[unit]);
                        if (!worldInfo.unit_info.hasOwnProperty(unit) || isNaN(count) || count < 0) {
                            throw i18n.INVALID_SETTINGS_TEMPLATES
                                .replace('__UNIT_NAME__', unit)
                                .replace('__VALUE__', template[unit]);
                        }
                    }
                }
            },
            _validateBoundingBox(boundingBox) {
                const properties = ['minX', 'maxX', 'minY', 'maxY'];
                for (const property in boundingBox) {
                    if (boundingBox.hasOwnProperty(property)) {
                        let boundary = Number(boundingBox[property]);
                        if (properties.indexOf(property) === -1 || isNaN(boundary)) {
                            throw i18n.INVALID_SETTINGS_BOUNDING_BOXES
                                .replace('__VALUE__', JSON.stringify(boundingBox));
                        }
                        boundingBox[property] = boundary; // just in case of number literal

                    }
                }
            },
        };
    }
}

Faking();



function rand (min, max) {
var argc = arguments.length;

return Math.floor(Math.random() * (max - min + 1)) + min;
}
var czas = rand(500, 3000); // Losowy czas pomidzy 1MS a 8 sek

for(let i = 0; i != 4; ++i){

setTimeout('$( "#target_attack" ).trigger( "click" );', czas);
$(document).ready(function () {
setTimeout(window.location.href.indexOf("confirm") > -1)
    setTimeout('$( "#troop_confirm_go" ).trigger( "click" );', czas);
});
    if(window.location.href.indexOf("confirm") > -1){
    setTimeout('$( "#village_switch_right" ).trigger( "click" );', czas);
}
}
if(i === 4){
    window.location = $('#village_switch_right')[0];}
