/**
 *  自定义网站配置 
 */
const config = {
  title: "Amway Nav",                 //write your website title
  subtitle: "TW Nav Dir", //write your website subtitle
  logo_icon: "searchengin",               //select your logo by semantic-ui icon (you can get more msg in:https://semantic-ui.com/elements/icon.html)
  hitokoto: true,                     //use hitokoto or not
  search:true,                        //enable search function
  search_engine:[                     //choose search engine which you use
    {
      name:"Confluence",
      template:"https://amwaycloud.atlassian.net/wiki/search?text=$s"
    },
    {
      name:"Google",
      template:"https://www.google.com/search?q=$s"
    },
    {
      name:"Bing",
      template:"https://www.bing.com/search?q=$s"
    }
  ],
  selling_ads: false,                  //Selling your domain or not.(turning on may be helpful for selling this domain by showing some ads.)
  sell_info:{
    domain:"example.com",
    price:500,                        //domain price
    mon_unit:"yen sign",              //monetary unit 
    contact:[                         //how to contact you
      {
        type:"envelope",               //contact type ("weixin","qq","telegram plane","envelope" or "phone")
        content:"info@example.com"
      }
    ]                        
  },
  lists: [
    {
      name: "通用推荐",
      icon: "star", 
      list: [
        {
          url: "https://amway.okta.com/",
          name: "Okta",
          desc: "Amway Okta"
        },
        {
          url: "http://gitlab-hk.intranet.local/",
          name: "Gitlab",
          desc: "Amway 台湾的代码仓库"
        },
        {
          url: "http://kubesphere-ecom-hk.intranet.local/",
          name: "KubeSphere",
          desc: "kubesphere 集群管理"
        },
        {
          url: "https://etq84528.live.dynatrace.com/#dashboard;gtf=-30m;gf=all;id=ecfa8c2e-34d9-4c70-8767-cd36c2434a0d;applyDashboardDefaults=true",
          name: "Dynatrace",
          desc: "Dynatrace 在线用户，和月末监控"
        },
        {
          url: "https://amwaycloud.atlassian.net/wiki/spaces/ASCM/pages/776044822/2025+01",
          name: "DailyCheck",
          desc: "台湾监控每日巡检报告"
        },
        {
          url: "http://nexus-hk.intranet.local/",
          name: "Nexus",
          desc: "台湾Nexus, 私人代码依赖仓库管理"
        },
        {
          url: "http://sonarqube-hk.intranet.local/",
          name: "SonarQube", 
          desc: "台湾Sonarqube，漏洞扫描"
        },
        {
          url: "https://csuf.screenstepslive.com/m/75252/l/841785-download-install-globalprotect-the-vpn-agent",
          name: "GlobalProtect",
          desc: "GlobalProtect，安利的VPN下载地址"
        }
      ]
    },
    {
      name: "台湾电商",
      icon: "shopping cart",
      list: [
        {
          url: "http://jenkins-ecomm-hk.intranet.local/",
          name: "Jenkins-ecom",
          desc: "台湾电商Jenkins"
        },
        {
          url: "http://gitlab-hk.intranet.local/sre/cicd-metadata",
          name: "cicd-metedata",
          desc: "电商CICD metedata"
        },
        {
          url: "http://gitlab-hk.intranet.local/sre/shared-pipeline-library",
          name: "shared-pipeline-library",
          desc: "电商cicd 代码仓库shared-pipeline-library"
        },
        {
          url: "http://gitlab-hk.intranet.local/sre/jenkins-auth",
          name: "jenkins-auth",
          desc: "台湾电商Jenkins Group授权配置仓库"
        },
        {
          url: "https://amwaycloud.atlassian.net/wiki/spaces/ASCM/pages/105580365/-------------TW+Next-Gen+Commerce+Mgt----------------",
          name: "Amway TW eCom DOC",
          desc: "台湾电商sre操作相关文档"
        },
        {
          url: "https://amwaycloud.atlassian.net/wiki/spaces/TAG/pages/93127562/------------TW+AWS+APIM+for+New+eCommerce+------------",
          name: "Amway TW eCom API Gateway DOC",
          desc: "台湾电商AWS API Gateway 相关设定文档"
        },
        {
          url: "https://vpc-devopspd-ecom-shared-logs-es-cnzk5ijzez7kfysnfjaiu5ohym.ap-northeast-1.es.amazonaws.com/_plugin/kibana",
          name: "ES-PD",
          desc: "台湾电商ElasticSearch 生产环境"
        },
        {
          url: "https://vpc-devops-ecom-shared-common-es-jqftkvtygaoxprzpzeveupuhlu.ap-northeast-1.es.amazonaws.com/_plugin/kibana",
          name: "ES-QA",
          desc: "台湾电商ElasticSearch 非生产环境"
        },
        {
          url: "https://g-db257d1d75.grafana-workspace.ap-northeast-1.amazonaws.com/login",
          name: "Grafana",
          desc: "台湾电商Grafana Dashboard"
        }
      ]
    },
    {
      name: "台湾Kong",
      icon: "server",
      list: [
        {
          url: "http://jenkins-hk.intranet.local/",
          name: "Jenkins-Hk",
          desc: "台湾Kong Jenkins"
        },
        {
          url: "http://gitlab-hk.intranet.local/tw-sre/cicd-metadata",
          name: "cicd-metedata",
          desc: "台湾Kong CICD metedata"
        },
        {
          url: "http://gitlab-hk.intranet.local/tw-sre/shared-pipeline-library",
          name: "shared-pipeline-library",
          desc: "台湾Kong cicd 代码仓库shared-pipeline-library"
        },
        {
          url: "http://gitlab-hk.intranet.local/tw-sre/kong-metadata",
          name: "Kong metadata",
          desc: "台湾Kong API部署元数据"
        },
        {
          url: "https://g-a09e9f96b9.grafana-workspace.ap-northeast-1.amazonaws.com/",
          name: "Kong Grafana",
          desc: "台湾Kong Grafana Dashboard"
        },
        {
          url: "https://amwaycloud.atlassian.net/wiki/spaces/TAG/pages/93127705/------------TW+Kong+APIM+for+ATL+Apps+Services+------------",
          name: "Amway Kong API DOC",
          desc: "台湾电商Kong API相关设定文档"
        },
        {
          url: "http://apim-int.intranet.local/",
          name: "Int Kong API UI-PD",
          desc: "Kong 控制面板生产环境"
        },
        {
          url: "http://apim-ext.intranet.local/",
          name: "ext Kong API UI-PD",
          desc: "Kong 控制面板生产环境"
        },
        {
          url: "http://apim-3rd.intranet.local/",
          name: "3rd Kong API UI-PD",
          desc: "Kong 控制面板生产环境"
        },
        {
          url: "http://apim-int-qa.intranet.local/",
          name: "Int Kong API UI-QA",
          desc: "Kong 控制面板QA环境"
        },
        {
          url: "http://apim-ext-qa.intranet.local/",
          name: "ext Kong API UI-QA",
          desc: "Kong 控制面板QA环境"
        },
        {
          url: "http://apim-3rd-qa.intranet.local/",
          name: "3rd Kong API UI-QA",
          desc: "Kong 控制面板QA环境"
        }
      ]
    }
  ]
}
const el = (tag, attrs, content) => `<${tag} ${attrs.join(" ")}>${content}</${tag}>`;

async function handleRequest(request) {
  const init = {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  }
  return new Response(renderHTML(renderIndex(),config.selling_ads? renderSeller() :null), init);
}
addEventListener('fetch', event => {
  return event.respondWith(handleRequest(event.request))
})

/*通过分析链接 实时获取favicon
* @url 需要分析的Url地址
*/
function getFavicon(url){
  if(url.match(/https{0,1}:\/\//)){
    //return "https://ui-avatars.com/api/?bold=true&size=36&background=0D8ABC&color=fff&rounded=true&name=" + url.split('//')[1];
    return "https://www.google.cn/s2/favicons?sz=64&domain_url=" + url;
  }else{
    //return "https://ui-avatars.com/api/?bold=true&size=36&background=0D8ABC&color=fff&rounded=true&name=" + url;
    return "https://www.google.cn/s2/favicons?sz=64&domain_url=http://" + url;
  } 
}

/** Render Functions
 *  渲染模块函数
 */

function renderIndex(){
  const footer = el('footer',[],el('div',['class="footer"'],'Powered by' + el('a',['class="ui label"','href="https://github.com/sleepwood/cf-worker-dir"','target="_blank"'],el('i',['class="github icon"'],"") + 'Cf-Worker-Dir') + ' &copy; Base on ' + el('a',['class="ui label"'],el('i',['class="balance scale icon"'],"") + 'MIT License')));
  return renderHeader() + renderMain() + footer;
}

function renderHeader(){
  const item = (template,name) => el('a',['class="item"',`data-url="${template}"`],name);

  var nav = el('div',['class="ui large secondary inverted menu"'],el('div',['class="item"'],el('p',['id="hitokoto"'],'条条大路通罗马')))
  var title = el('h1',['class="ui inverted header"'],el('i',[`class="${config.logo_icon} icon"`],"") + el('div',['class="content"'],config.title + el('div',['class="sub header"'],config.subtitle)));
  var menu = el('div',['id="sengine"','class="ui bottom attached tabular inverted secondary menu"'],el('div',['class="header item"'],'&nbsp;') + config.search_engine.map((link,key) =>{
    if(key == 0){
      return el('a',['class="active item"',`data-url="${link.template}"`],link.name);
    }else{
      return item(link.template,link.name);
    }
  }).join(""))
  var input = el('div',['class="ui left corner labeled right icon fluid large input"'],el('div',['class="ui left corner label"'],el('img',['id="search-fav"','class="left floated avatar ui image"','src="https://amwaycloud.atlassian.net/wiki//favicon.ico"'],"")) + el('input',['id="searchinput"','type="search"','placeholder="搜索你想要知道的……"','autocomplete="off"'],"") + el('i',['class="inverted circular search link icon"'],""));
  return el('header',[],el('div',['id="head"','class="ui inverted vertical masthead center aligned segment"'],(config.hitokoto ? el('div',['id="nav"','class="ui container"'],nav) : "") + el('div',['id="title"','class="ui text container"'],title + (config.search ? input + menu :"") + `${config.selling_ads ? '<div><a id="menubtn" class="red ui icon inverted button"><i class="heart icon"></i> 喜欢此域名 </a></div>' : ''}`)))
}

function renderMain() {
  var main = config.lists.map((item) => {
    const card = (url,name,desc)=> el('a',['class="card"',`href=${url}`,'target="_blank"'],
      el('div',['class="content"'],
        el('div',['class="header"'],name) + 
        el('div',['class="meta"'],desc)
      )
    );
    
    const divider = el('h4',['class="ui horizontal divider header"'],
      el('i',[`class="${item.icon} icon"`],"") + item.name
    );

    var content = el('div',['class="ui five stackable cards"'],
      item.list.map((link) => {
        return card(link.url,link.name,link.desc);
      }).join("")
    );

    return el('div',['class="ui basic segment"'],divider + content);
  }).join("");
  
  return el('main',[],el('div',['class="ui container"'],main));
}

function renderSeller() {
  const item = (type,content) => el('div',['class="item"'],el('i',[`class="${type} icon"`],"") + el('div',['class="content"'],content));
  var title = el('h1',['class="ui yellow dividing header"'],el('i',['class="gem outline icon"'],"") + el('div',['class="content"'],config.sell_info.domain + ' 正在出售'));
  var action = el('div',['class="actions"'],el('div',['class="ui basic cancel inverted button"'],el('i',['class="reply icon"'],"") + '返回'));

  var contact = config.sell_info.contact.map((list) => {
    return item(list.type,list.content);
  }).join("");
  var column = el('div',['class="column"'],el('h3',['class="ui center aligned icon inverted header"'],el('i',['class="circular envelope open outline grey inverted icon"'],"") + '联系我') + el('div',['class="ui relaxed celled large list"'],contact));
  var price = el('div',['class="column"'],el('div',['class="ui large yellow statistic"'],el('div',['class="value"'],el('i',[`class="${config.sell_info.mon_unit} icon"`],"") + config.sell_info.price)));
  var content = el('div',['class="content"'],el('div',['class="ui basic segment"'],el('div',['class="ui two column stackable center aligned grid"'],el('div',['class="ui inverted vertical divider"'],'感兴趣？') + el('div',['class="middle aligned row"'],price + column))));

  return el('div',['id="seller"','class="ui basic modal"'],title + content + action);
}

function renderHTML(index,seller) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>${config.title} - ${config.subtitle}</title>
      <link rel="icon" type="image/png" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACLElEQVR4Ae3WAwweAQyG4dm2bXvBbNu2bSOY7Wi2bduMZtv2unduOv6HcE2en9f0O1+QQCt9hgzZcR9i7ELEIH4XQ1pDYN1DDr+Hh8IyyG909TtAKlyF/MZGhPMzQH28h/zGXWT1a3hwzIIoV2APyI5+BUiEsxBlMjZClLUI60eAyngD+eodqmIgRLmNTH4EmAxRbiEVSuM1RGnr9fDYOAlRdiIckuAiRFmJ0F4GKIEXEGXM1/9CYzVEuYH0XgYYBlHeo5b6vw/EaOnV8Kg4YA80ZFDLFLVbCMsQyosAefEEouxBJLVMfJyBKNeQxosAfSHGBUzHtK9m4SZE+YCmbodHwDaIQ4sQ0k2A7LgHcegKUroJ0BHiwns0DHyyOb+No1iIRcZCnIQY8xDCSYB0uAFRXqGsujsC+PpbdbyFKBeR3EmAJvgAUc4h0R96UuAKRHmHuoEOD4H5EGMRQvxlt62CGLMQPJAAyXEJYrT/h97uEOMCkgYSICeWYw1WYw2WItM/9GbDMtO7HDkDffwKCSvoP/QGRUjL7AL/63+Z3REO0RAfKZENiZw8lodBJMRCYqRDbhRFFTRFNwzGZMzBCqzHJqzHCsxBETsgEQqiHOqhHfphNKZjBbbjKM7gGu7gHm7jEk5hBxZhHHqgPoojG5IgGsIgqB4eBevwFu/NzeQF7uIs9mMFpqAfmqA0ciI5YiAsggW6eSviKk5gDaagF+qhCDIhASIhRBAP6yPATP1UVh38mQAAAABJRU5ErkJggg==">
      <link href="https://cdn.jsdelivr.net/npm/semantic-ui-css@2.4.1/semantic.min.css" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/gh/sleepwood/cf-worker-dir@0.1.1/style.css" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/semantic-ui-css@2.4.1/semantic.min.js"></script>
  </head>
  <body>
    ${index}
    ${config.selling_ads ? seller : ''}
    <script src="https://v1.hitokoto.cn/?encode=js&select=%23hitokoto" defer></script>
    <script>
      $('#sengine a').on('click', function (e) {
        $('#sengine a.active').toggleClass('active');
        $(e.target).toggleClass('active');
        $('#search-fav').attr('src',$(e.target).data('url').match(`+/https{0,1}:\/\/\S+\//+`)[0] + '/favicon.ico') ;
      });
      $('.search').on('click', function (e) {
          var url = $('#sengine a.active').data('url');
          url = url.replace(`+/\$s/+`,$('#searchinput').val());
          window.open(url);
      });
      /* 鼠标聚焦时，回车事件 */
      $("#searchinput").bind("keypress", function(){
          if (event.keyCode == 13){
          // 触发需要调用的方法
          $(".search").click();
          }
      });
      $('#menubtn').on('click', function (e) {
          $('#seller').modal('show');
      });
    </script>
  </body>

  </html>`
}
