import{_ as p,r as d,o as h,c as o,a as l,b as a,t as s,e as i,d as n}from"./app.11752cd9.js";const u={},f={href:"https://github.com/f/awesome-chatgpt-prompts",target:"_blank",rel:"noopener noreferrer"},m={href:"https://openai.com",target:"_blank",rel:"noopener noreferrer"};function x(t,e){const r=d("ExternalLinkIcon");return h(),o("div",null,[e[6]||(e[6]=l('<h1 id="openai-使用" tabindex="-1"><a class="header-anchor" href="#openai-使用" aria-hidden="true">#</a> OpenAI 使用</h1><p>最近ChatGPT横空出世，让AI立马成为众之焦点。在感受了ChatGPT之后，能感受到它对文本信息的整理和整合的能力以及对语义理解的能力的强大之处。同时考虑到它强大的文本输出能力，可以作为一把利器放在ToMemo的键盘中，就开始了开发迭代之旅。</p><h2 id="功能概况" tabindex="-1"><a class="header-anchor" href="#功能概况" aria-hidden="true">#</a> 功能概况</h2><p>应用中接入的并不是ChatGPT，而是同一个公司下的上一代产品提供的接口。可以理解成ChatGPT是3.5版本，应用中接入的AI是3.0版本。同时，要使用这个功能，存在一些前提条件：需要OpenAI的账号。</p><p>在拥有OpenAI的账号后，这个应用能提供什么功能：</p><ul><li>类似ChatGPT的对话功能，并在此基础上做了扩展，只要关注内容而不是Prompt</li><li>Prompt集合，提前设置多个prompt，使用时结合文本内容一起发送。</li><li>Prompt模板库，预置优质的Prompt模板，直接上手的同时学习怎么书写优秀的Prompt</li></ul><h2 id="开启ai之旅" tabindex="-1"><a class="header-anchor" href="#开启ai之旅" aria-hidden="true">#</a> 开启AI之旅</h2><p>进入「设置」-「扩展」-「OpenAI」，选择开启OpenAI，并在密钥中输入来自OpenAI账号的密钥信息。</p><p>这样就可以开启探索之旅了。</p><h2 id="指令集合" tabindex="-1"><a class="header-anchor" href="#指令集合" aria-hidden="true">#</a> 指令集合</h2><p>在这里可以预置一些常用的指令，这样可以在键盘中直接输出。</p><h3 id="添加指令" tabindex="-1"><a class="header-anchor" href="#添加指令" aria-hidden="true">#</a> 添加指令</h3><p>点击页面上方的加号，有两个选项「添加」和「从模板库添加」</p><h4 id="添加" tabindex="-1"><a class="header-anchor" href="#添加" aria-hidden="true">#</a> 添加</h4><p>会进入自定义添加指令的页面，需要输入名称和指令内容。</p>',15)),a("p",null,"其中指令内容可以看成Prompt的模板，比如“请帮我将以下内容翻译成中文："+s(t.CONTENT)+"”。在这个示例中，有一个CONTENT的变量。在使用时，会自动将这个变量替换成选中的文本或者剪切板中的内容。从而实现，一键召唤AI的功能。",1),e[7]||(e[7]=a("h4",{id:"从模板库添加",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#从模板库添加","aria-hidden":"true"},"#"),i(" 从模板库添加")],-1)),a("p",null,[e[1]||(e[1]=i("参考了")),a("a",f,[e[0]||(e[0]=i("awesome-chatgpt-prompts")),n(r)]),e[2]||(e[2]=i("，里面包含了100多条不同上下文的模板给ChatGPT使用。更完整的上下文，可以让ChatGPT更能接近你的想法。"))]),e[8]||(e[8]=l('<p>我只是从中选择了10条左右，也对中英文做了国际化处理。如果是英文环境下的话，从模板生成的指令，内容是英文的；如果是中文环境下的话，内容则会变成中文。但也有几个内容没有找到合适的中文翻译，保留了英文的Prompt，你可以根据自己的诉求在生成指令后自由调整内容。</p><h2 id="体验一下" tabindex="-1"><a class="header-anchor" href="#体验一下" aria-hidden="true">#</a> 体验一下</h2><p>在这个页面中，构成了类似聊天的结构，你输入想要沟通的内容后，可以选择直接发送，也可以选择来自指令集合的指令，从而快速达成目的。</p><p>有三个点需要特别说明一下</p><ul><li>沟通记录不会保存下来，如果退出当前页面后，会自动清除之前的聊天记录。</li><li>长按聊天记录，可以触发复制和重发的菜单选项。</li><li>有时因为网络等问题，可能会出现异常，一般重新发送后，基本都可以恢复。</li></ul><h2 id="键盘中使用" tabindex="-1"><a class="header-anchor" href="#键盘中使用" aria-hidden="true">#</a> 键盘中使用</h2><p>在键盘中，OpenAI的入口是在左上角的图标。点击后，会进入控制面板的页面，里面会有「OpenAI」的按钮（如果没有出现，是因为没有开启OpenAI，根据上面的描述，自行开启）。</p><p>进入后，会罗列出所有的指令。同时还有当前操作的内容、右上角的功能按钮。</p><h3 id="右上角功能按钮" tabindex="-1"><a class="header-anchor" href="#右上角功能按钮" aria-hidden="true">#</a> 右上角功能按钮</h3><p>右上角会有三到四个按钮，他们是：</p><ul><li>回车，可以用作发送或者换行</li><li>地球仪，切换输入法</li><li>提取文本，在输入框中，如果调整了选择的范围，可以通过点击此按钮重新获取已经选择的内容。</li><li>设置，直接前往OpenAI设置页面</li></ul><h3 id="使用过程中" tabindex="-1"><a class="header-anchor" href="#使用过程中" aria-hidden="true">#</a> 使用过程中</h3><p>关于当前操作内容的说明：</p><ul><li>光标选择的优先级 &gt; 剪切板的优先级 <ul><li>如果光标选中了文本，此时有复制的内容，此时展示的是选中的文本</li></ul></li><li>光标移动后不能自动识别并更新到内容中 <ul><li>调整光标后，通过点击提取文本的按钮，将已经选择的内容同步到键盘中</li><li>如果光标有选择的内容，会在执行动作之前重新获取一次，并在内容生成后，自动替换掉。</li></ul></li><li>如果当前的内容不是自己想要的，可以通过点击右侧的X按钮进行隐藏。</li></ul><p>关于光标的说明：</p><ul><li>如果光标是单个的，位于文字之间 <ul><li>此时提取文本按钮点击后会清空已经选择的文本内容</li><li>此时执行指令时，会在结果返回后，插入到光标所在的位置</li></ul></li><li>如果光标是选择状态的，选择了文本 <ul><li>此时提取文本按钮点击后会更新当前操作的内容</li><li>此时执行指令时，会在结果返回后，替换已经选择的文本内容</li></ul></li></ul><h2 id="如何申请密钥" tabindex="-1"><a class="header-anchor" href="#如何申请密钥" aria-hidden="true">#</a> 如何申请密钥</h2><h3 id="账号注册" tabindex="-1"><a class="header-anchor" href="#账号注册" aria-hidden="true">#</a> 账号注册</h3>',18)),a("p",null,[e[4]||(e[4]=i("前往")),a("a",m,[e[3]||(e[3]=i("OpenAI")),n(r)]),e[5]||(e[5]=i("官网，点击注册，然后根据操作步骤，完成账号注册。"))]),e[9]||(e[9]=a("h3",{id:"密钥获取",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#密钥获取","aria-hidden":"true"},"#"),i(" 密钥获取")],-1)),e[10]||(e[10]=a("p",null,[i("完成登录后，点击右上角头像，然后选择「View API Keys」 "),a("img",{src:"http://img.leozhou.xyz/picGo/202302242226433.png",alt:""})],-1)),e[11]||(e[11]=a("p",null,"然后在这个页面中，创建一个「secret key」，并将这个key单独保留下来，网站不会重复显示的。 只要将这个key填入上面的OpenAI的密钥输入框中，就可以开始使用OpenAI的功能了。",-1))])}const b=p(u,[["render",x],["__file","openai.html.vue"]]);export{b as default};
