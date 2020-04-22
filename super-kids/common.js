/* Mapのスクロールを止める */
$(function() {
        var map = $('iframe');
        map.css('pointer-events', 'none');
        $('#access').click(function() {
            map.css('pointer-events', 'auto');
        });
        map.mouseout(function() {
            map.css('pointer-events', 'none');
        })
    })

/* 何が身につくの？ */
function point(inner_num){
    document.getElementById('point1m').classList.remove('tm_active');
    document.getElementById('point2m').classList.remove('tm_active');
    document.getElementById('point3m').classList.remove('tm_active');
    document.getElementById('point4m').classList.remove('tm_active');
    document.getElementById('point' + inner_num + 'm').classList.add('tm_active');

    document.getElementById('point1s').classList.remove('ts_active');
    document.getElementById('point2s').classList.remove('ts_active');
    document.getElementById('point3s').classList.remove('ts_active');
    document.getElementById('point4s').classList.remove('ts_active');
    document.getElementById('point' + inner_num + 's').classList.add('ts_active');
}

/* 年間カリキュラム */
function year(inner_num){
    document.getElementById('year1m').classList.remove('tm_active');
    document.getElementById('year2m').classList.remove('tm_active');
    document.getElementById('year3m').classList.remove('tm_active');
    document.getElementById('year4m').classList.remove('tm_active');
    document.getElementById('year5m').classList.remove('tm_active');
    document.getElementById('year6m').classList.remove('tm_active');
    document.getElementById('year7m').classList.remove('tm_active');
    document.getElementById('year8m').classList.remove('tm_active');
    document.getElementById('year9m').classList.remove('tm_active');
    document.getElementById('year10m').classList.remove('tm_active');
    document.getElementById('year11m').classList.remove('tm_active');
    document.getElementById('year' + inner_num + 'm').classList.add('tm_active');

    document.getElementById('year1s').classList.remove('ts_active');
    document.getElementById('year2s').classList.remove('ts_active');
    document.getElementById('year3s').classList.remove('ts_active');
    document.getElementById('year4s').classList.remove('ts_active');
    document.getElementById('year5s').classList.remove('ts_active');
    document.getElementById('year6s').classList.remove('ts_active');
    document.getElementById('year7s').classList.remove('ts_active');
    document.getElementById('year8s').classList.remove('ts_active');
    document.getElementById('year9s').classList.remove('ts_active');
    document.getElementById('year10s').classList.remove('ts_active');
    document.getElementById('year11s').classList.remove('ts_active');
    document.getElementById('year' + inner_num + 's').classList.add('ts_active');
}

/* 開発ツール */
function tools(inner_num){
    document.getElementById('tools1m').classList.remove('tm_active');
    document.getElementById('tools2m').classList.remove('tm_active');
    document.getElementById('tools3m').classList.remove('tm_active');
    document.getElementById('tools' + inner_num + 'm').classList.add('tm_active');

    document.getElementById('tools1s').classList.remove('ts_active');
    document.getElementById('tools2s').classList.remove('ts_active');
    document.getElementById('tools3s').classList.remove('ts_active');
    document.getElementById('tools' + inner_num + 's').classList.add('ts_active');
}

/* よくある質問 */
function topfaq(inner_num){
    var box = document.getElementById('faq' + inner_num);
    box.classList.toggle('faq_a_on');
}