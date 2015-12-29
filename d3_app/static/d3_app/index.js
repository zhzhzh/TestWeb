var app = angular.module('myApp', []);

app.config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
});

app.controller('MainCtrl', function ($scope) {

    var data = {
        "nodes": [
            {"layer": 0, "name": "nvppaymentserv"},
            {"layer": 0, "name": "paymentserv"},
            {"name": "RTGS"},
            {"layer": 0, "name": "merchantpaymentweb"},
            {"layer": 0, "name": "recurringpaymentapiserv"},
            {"layer": 0, "name": "paymentapiplatformserv"},
            {"layer": 0, "name": "moneyplanningserv_ca"},
            {"layer": 0, "name": "wapapp"},
            {"layer": 0, "name": "hermesnodeweb"},
            {"layer": 0, "name": "checkoutserv"},
            {"layer": 0, "name": "mec2"},
            {"layer": 0, "name": "purchaseserv"},
            {"layer": 0, "name": "paymentsplatformserv"},
            {"layer": 0, "name": "corepayteconnector"},
            {"name": "paymentserv_ca"},
            {"layer": 0, "name": "heliosnodeweb"},
            {"layer": 0, "name": "walletsendmoneyserv"},
            {"name": "personalpaymentserv"},
            {"layer": 0, "name": "webscr"},
            {"layer": 0, "name": "nvpacquiringserv"},
            {"layer": 0, "name": "amqbatchtxnd"},
            {"name": "paymentserv-non_critical"},
            {"layer": 0, "name": "mobileacquiringapiserv"},
            {"layer": 0, "name": "gmapiserv"},
            {"layer": 0, "name": "recpayd"},
            {"layer": 0, "name": "helixserv"},
            {"layer": 0, "name": "adaptivepaymentserv"},
            {"layer": 0, "name": "retaildirectcardserv"},
            {"layer": 0, "name": "shippinglabelserv"},
            {"name": "shipmentserv"},
            {"layer": 0, "name": "bcsweb"},
            {"layer": 0, "name": "mobilemerchantserv"},
            {"layer": 0, "name": "acquiringserv"},
            {"layer": 0, "name": "xoonboardingnodeweb"},
            {"layer": 0, "name": "nvppaymentinquiryserv"},
            {"layer": 0, "name": "helixinternalserv"},
            {"layer": 0, "name": "schedpayserv"},
            {"layer": 0, "name": "payflowtransactionserv"},
            {"layer": 0, "name": "invoiceapiserv"},
            {"layer": 0, "name": "shipweb"},
            {"name": "shipserv"},
            {"name": "fulfillmentinternalserv_ca"},
            {"layer": 0, "name": "ariesnodeweb"},
            {"layer": 0, "name": "posapiserv"},
            {"layer": 0, "name": "posbusinessserv"},
            {"layer": 0, "name": "batch-bc_process_scheduled_payment"},
            {"layer": 0, "name": "payoutserv"},
            {"layer": 0, "name": "proxnodeweb"},
            {"layer": 0, "name": "securestorageapiserv"},
            {"layer": 0, "name": "ppplusbrcpmnodeweb"},
            {"layer": 0, "name": "mfsconsumer"},
            {"layer": 0, "name": "smscommandprocessord"},
            {"name": "smslogicserv"},
            {"layer": 0, "name": "acquiringweb"},
            {"layer": 0, "name": "batch-shipping_processor"},
            {"layer": 0, "name": "ppapi_v2"}, {"name": "blimpserv_v2-api"},
            {"layer": 0, "name": "requestmoneyserv"},
            {"layer": 0, "name": "webstorenodeweb"},
            {"name": "03"},
            {"layer": 0, "name": "batch-negative_balance_recovery"}
        ],
        "links": [
            {"source": 13, "target": 14, "value": 312459},
            {"source": 12, "target": 32, "value": 12136},
            {"source": 16, "target": 14, "value": 449},
            {"source": 3, "target": 1, "value": 107571},
            {"source": 14, "target": 1, "value": 3799},
            {"source": 17, "target": 2, "value": 272951},
            {"source": 9, "target": 2, "value": 1209318},
            {"source": 29, "target": 21, "value": 10783
        }, {"source": 22, "target": 23, "value": 79919}, {"source": 30, "target": 2, "value": 59740}, {
            "source": 20,
            "target": 21,
            "value": 86760
        }, {"source": 12, "target": 4, "value": 79547}, {"source": 5, "target": 14, "value": 13031}, {
            "source": 19,
            "target": 2,
            "value": 230631
        }, {"source": 23, "target": 2, "value": 143612}, {"source": 54, "target": 21, "value": 40}, {
            "source": 25,
            "target": 23,
            "value": 120
        }, {"source": 53, "target": 32, "value": 106}, {"source": 55, "target": 56, "value": 12}, {
            "source": 4,
            "target": 32,
            "value": 42485
        }, {"source": 4, "target": 1, "value": 21242}, {"source": 12, "target": 59, "value": 6}, {
            "source": 6,
            "target": 1,
            "value": 1463046
        }, {"source": 16, "target": 17, "value": 272951}, {"source": 37, "target": 2, "value": 26}, {
            "source": 20,
            "target": 2,
            "value": 3269
        }, {"source": 25, "target": 1, "value": 25121}, {"source": 31, "target": 44, "value": 186}, {
            "source": 37,
            "target": 21,
            "value": 15
        }, {"source": 26, "target": 2, "value": 127757}, {"source": 15, "target": 5, "value": 406499}, {
            "source": 58,
            "target": 5,
            "value": 8
        }, {"source": 44, "target": 26, "value": 10436}, {"source": 14, "target": 6, "value": 374232}, {
            "source": 48,
            "target": 23,
            "value": 628
        }, {"source": 8, "target": 5, "value": 2111223}, {"source": 7, "target": 9, "value": 20}, {
            "source": 39,
            "target": 40,
            "value": 24688
        }, {"source": 38, "target": 23, "value": 13835}, {"source": 29, "target": 2, "value": 59772}, {
            "source": 18,
            "target": 2,
            "value": 253834
        }, {"source": 7, "target": 2, "value": 958205}, {"source": 18, "target": 1, "value": 43223}, {
            "source": 56,
            "target": 2,
            "value": 12
        }, {"source": 31, "target": 32, "value": 65951}, {"source": 42, "target": 5, "value": 18195}, {
            "source": 6,
            "target": 2,
            "value": 3781468
        }, {"source": 32, "target": 2, "value": 149852}, {"source": 36, "target": 2, "value": 16226}, {
            "source": 10,
            "target": 5,
            "value": 696398
        }, {"source": 14, "target": 41, "value": 9681}, {"source": 3, "target": 2, "value": 1848410}, {
            "source": 40,
            "target": 1,
            "value": 11527
        }, {"source": 35, "target": 1, "value": 24409}, {"source": 11, "target": 6, "value": 367005}, {
            "source": 57,
            "target": 16,
            "value": 9
        }, {"source": 12, "target": 0, "value": 416452}, {"source": 37, "target": 32, "value": 15904}, {
            "source": 18,
            "target": 35,
            "value": 16505
        }, {"source": 47, "target": 5, "value": 1171}, {"source": 18, "target": 26, "value": 38180}, {
            "source": 27,
            "target": 14,
            "value": 61773
        }, {"source": 34, "target": 23, "value": 37685}, {"source": 24, "target": 21, "value": 63437}, {
            "source": 36,
            "target": 21,
            "value": 11709
        }, {"source": 4, "target": 2, "value": 1537596}, {"source": 25, "target": 26, "value": 73818}, {
            "source": 0,
            "target": 23,
            "value": 208
        }, {"source": 45, "target": 2, "value": 1135}, {"source": 1, "target": 2, "value": 4851451}, {
            "source": 24,
            "target": 2,
            "value": 78729
        }, {"source": 52, "target": 2, "value": 238}, {"source": 41, "target": 6, "value": 9681}, {
            "source": 50,
            "target": 16,
            "value": 518
        }, {"source": 5, "target": 6, "value": 4345634}, {"source": 46, "target": 1, "value": 2331}, {
            "source": 45,
            "target": 21,
            "value": 5752
        }, {"source": 21, "target": 2, "value": 178497}, {"source": 12, "target": 34, "value": 1214}, {
            "source": 0,
            "target": 1,
            "value": 2888300
        }, {"source": 43, "target": 44, "value": 5976}, {"source": 33, "target": 5, "value": 67536}, {
            "source": 9,
            "target": 1,
            "value": 5585
        }, {"source": 5, "target": 9, "value": 995080}, {"source": 49, "target": 5, "value": 438}, {
            "source": 22,
            "target": 27,
            "value": 61749
        }, {"source": 23, "target": 1, "value": 79}, {"source": 22, "target": 31, "value": 53964}, {
            "source": 60,
            "target": 21,
            "value": 1
        }, {"source": 0, "target": 9, "value": 135267}, {"source": 16, "target": 6, "value": 137069}, {
            "source": 0,
            "target": 2,
            "value": 1436119
        }, {"source": 40, "target": 2, "value": 13161}, {"source": 28, "target": 29, "value": 70555}, {
            "source": 7,
            "target": 1,
            "value": 130337
        }, {"source": 51, "target": 52, "value": 238}
        ]
    };


    var margin = {top: 1, right: 1, bottom: 6, left: 1},
        width = $('#main_chart').width() - margin.left - margin.right,
        height = 900 - margin.top - margin.bottom;

//(1)数字格式化函数
    var formatNumber = d3.format(",.0f"),//将数字转化为字符串(小数四舍五入)，逗号可以允许使用千分位来分隔,例如：1391.989->1,392
    //下面只是为提示条的数字格式化
        format = function (d) {
            console.log(d + "->" + formatNumber(d));
            return formatNumber(d) + " TWh";
        },//TWh是太瓦时，描述的电量分配的例子，当然用这个单位

        color = d3.scale.category20();

    var svg = d3.select("#chart")//ID选择器
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//(2)生成sankey布局
    var sankey = d3.sankey()
        .nodeWidth(30)//每个资源块的水平像素宽度
        .nodePadding(10)//资源块间的纵向间距
        .size([width, height]);

    var path = sankey.link();


//(3)sankey加载节点和链接数据
    sankey
        .nodes(data.nodes)
        .links(data.links)
        .layout(32);//布局均匀化，数值大中间的块就会向下移动，比较均衡
//(4)sankey设置链接属性
    var link = svg.append("g").selectAll(".link")
        .data(data.links)
        .enter().append("path")
        .attr("class", "link")
        .attr("d", path)//链接的路径设置已经被sankey封装了，这里调用之后就可以生成连线呢的路径
        //下面这句生成线的宽度，//线的宽度按照线端点两端块较小者扩宽，但为啥偏移max(1, d.dy）？
        .style("stroke-width", function (d) {
            return Math.max(1, d.dy);
        })
        .style("stroke", function(d) {
            return color(d.source.name.replace(/ .*/, ""));
        })
        .sort(function (a, b) {
            return b.dy - a.dy;
        }); //这句去掉效果一样不知为啥？

//(5)sankey设置链接提示
    link.append("title")
        .text(function (d) {
            return d.source.name + " → " + d.target.name + "\n" + formatNumber(d.value);
        });

//(6)拖动
    var node = svg.append("g").selectAll(".node")
        .data(data.nodes)
        .enter().append("g")
        .attr("class", "node")
        .attr("transform", function (d) {
            return "translate(" + d.x + "," + d.y + ")";
        })
        .call(d3.behavior.drag()
            .origin(function (d) {
                return d;
            })//拖动行为保存鼠标的位置，并在拖动过程中的启动元件的位置之间的偏移量。如果是空的起源访问，然后设置元素的位置就拖鼠标的位置，这可能会导致对大量元素有明显的跳动
            .on("dragstart", function () { //这句是什么？
                this.parentNode.appendChild(this);
            })
            .on("drag", dragmove));
//(7)块
    node.append("rect")
        .attr("height", function (d) {
            return d.dy;
        })
        .attr("width", sankey.nodeWidth())//刚才设置的块的宽度
        .style("fill", function (d) {
            return d.color = color(d.name.replace(/ .*/, ""));
        })
        .style("stroke", function (d) {
            return d3.rgb(d.color).darker(2);
        })//较深
        .append("title")
        .text(function (d) {
            return d.name + "\n" + format(d.value);
        });
//(8)文字
    node.append("text")
        .attr("x", -6)
        .attr("y", function (d) {
            return d.dy / 2;
        })
        .attr("dy", ".35em")
        .attr("text-anchor", "end")//文字在左边（中轴右边的）
        .attr("transform", null)
        .text(function (d) {
            return d.name;
        })
        .filter(function (d) {
            return d.x < width / 2;
        })//除去在中轴左边的
        .attr("x", 6 + sankey.nodeWidth())
        .attr("text-anchor", "start");//文字在右边

    node.append("text") //node
		.attr("x", function(i) {return -i.dy / 2})
		.attr("y", function(i) {return i.dx / 2 + 6})
		.attr("transform", "rotate(270)").attr("text-anchor", "middle").text(function(i) {
			if (i.dy>50){
				return formatNumber(i.value);
			}
		}).attr("fill","white");//.attr("stroke","black");

//(9)拖动
    function dragmove(d) {
        d3.select(this).attr("transform", "translate(" + d.x + "," +
            (d.y = //下面的纵坐标调整值是怎么计算的？
                Math.max(0,
                    Math.min(
                        height - d.dy,
                        d3.event.y
                    ))) + ")");
        sankey.relayout();//重新布局,线上下的位置调整
        link.attr("d", path);//更新路径
    }

});