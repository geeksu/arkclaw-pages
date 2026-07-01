(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();
  var warn = style.getPropertyValue('--warn').trim();

  // --- Chart 1: Gap Analysis Radar ---
  var chartGap = echarts.init(document.getElementById('chart-gap'), null, { renderer: 'svg' });
  chartGap.setOption({
    animation: false,
    tooltip: { trigger: 'item', appendToBody: true },
    legend: {
      data: ['和联社康现状', '空间智能体目标'],
      bottom: 10,
      textStyle: { color: muted, fontSize: 13 },
      itemWidth: 20,
      itemHeight: 10
    },
    radar: {
      indicator: [
        { name: '空间数字化', max: 10 },
        { name: '设备互联', max: 10 },
        { name: 'AI能力', max: 10 },
        { name: '数据融合', max: 10 },
        { name: '应急能力', max: 10 },
        { name: '展示能力', max: 10 }
      ],
      center: ['50%', '52%'],
      radius: '65%',
      axisName: { color: ink, fontSize: 13 },
      splitArea: {
        areaStyle: {
          color: [bg2, 'transparent', bg2, 'transparent', bg2]
        }
      },
      axisLine: { lineStyle: { color: rule } },
      splitLine: { lineStyle: { color: rule } }
    },
    series: [{
      type: 'radar',
      data: [
        {
          value: [2, 3, 3, 2, 1, 1],
          name: '和联社康现状',
          itemStyle: { color: warn },
          lineStyle: { color: warn, width: 2 },
          areaStyle: { color: warn + '33' },
          symbolSize: 6
        },
        {
          value: [9, 9, 8, 9, 8, 9],
          name: '空间智能体目标',
          itemStyle: { color: accent },
          lineStyle: { color: accent, width: 2 },
          areaStyle: { color: accent + '33' },
          symbolSize: 6
        }
      ]
    }]
  });
  window.addEventListener('resize', function() { chartGap.resize(); });

  // --- Chart 2: Competitive Landscape ---
  var chartComp = echarts.init(document.getElementById('chart-competitive'), null, { renderer: 'svg' });
  chartComp.setOption({
    animation: false,
    tooltip: {
      trigger: 'item',
      appendToBody: true,
      formatter: function(p) {
        return '<b>' + p.name + '</b><br/>玩家数量: ' + p.value + '<br/>' + p.data.desc;
      }
    },
    grid: { left: '12%', right: '5%', bottom: '10%', top: '8%' },
    xAxis: {
      type: 'category',
      data: ['医院智慧病房', '家用医疗器械', '社康-居家（中段）', '社康空间智能体'],
      axisLabel: { color: muted, fontSize: 12, interval: 0, rotate: 15 },
      axisLine: { lineStyle: { color: rule } }
    },
    yAxis: {
      type: 'value',
      name: '竞争者数量',
      nameTextStyle: { color: muted, fontSize: 12 },
      axisLabel: { color: muted },
      axisLine: { lineStyle: { color: rule } },
      splitLine: { lineStyle: { color: rule } }
    },
    series: [{
      type: 'bar',
      data: [
        { value: 8, name: '医院智慧病房', desc: '可孚、硅基传感、亚华、润开鸿、中软国际等', itemStyle: { color: accent2 } },
        { value: 5, name: '家用医疗器械', desc: '可孚17款、硅基CGM、华为穿戴等', itemStyle: { color: accent2 + 'aa' } },
        { value: 1, name: '社康-居家（中段）', desc: '仅和联社康（深圳首批示范）', itemStyle: { color: warn } },
        { value: 0, name: '社康空间智能体', desc: '全国空白 — 狄耐克/狄鸿智创的机会', itemStyle: { color: accent } }
      ],
      barWidth: '45%',
      label: {
        show: true,
        position: 'top',
        color: ink,
        fontSize: 13,
        fontWeight: 700,
        formatter: function(p) {
          if (p.value === 0) return '空白';
          if (p.value === 1) return p.value + '（先行者）';
          return p.value + '+';
        }
      }
    }]
  });
  window.addEventListener('resize', function() { chartComp.resize(); });

})();
