import{_ as t,o,c as i,a as n}from"./app.11752cd9.js";const a={};function r(l,e){return o(),i("div",null,e[0]||(e[0]=[n('<h1 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h1><p>ToMemo is a superb note app for frequently used content notes and short-time content recording.</p><h2 id="idea" tabindex="-1"><a class="header-anchor" href="#idea" aria-hidden="true">#</a> Idea</h2><p>ToMemo&#39;s core point: <code>digital content management</code>.</p><p>This product is, as its name suggests, a memo application. Functionally, it is divided into three parts.</p><ul><li>Part 1, which efficiently organizes high-frequency and long-lasting content for later use in work life, is functionally classified as <strong>Memos</strong>.</li><li>Part 2, receive unknown categories of content and organize them afterwards, and also to clear the low-lived content, which is functionally classified as <strong>Short-term memory</strong>.</li><li>Part 3, efficiency <ul><li>needs to send the above two types of content efficiently to those who need it, providing an <strong>extended keyboard</strong>.</li><li>Efficient entry of uncategorized content on the phone, providing linkage with the Shortcut app to enable copying followed by double-clicking on the auxiliary touch to quickly add records.</li></ul></li><li>Part 4, digital Content Generation with the Power of AI</li></ul><p>The ultimate expectation is to improve the efficiency of our work life through the management of content input and output.</p><h3 id="background" tabindex="-1"><a class="header-anchor" href="#background" aria-hidden="true">#</a> Background</h3><p>In the process of using a cell phone, sometimes you suddenly need to keyboard some content, such as <code>email address</code>, <code>delivery address</code>, <code>ID card</code>, <code>daily template</code>, <code>notify others text</code>. Although the frequency of occurrence is not high every day, every time we encounter it, we either interrupt the text greatly, switch input methods and punctuation; or we can&#39;t think of it and need to find the original to continue the operation. This interrupts our sustained concentration while also silently killing time again and again.</p><p>Sometimes, I think and try to figure out what to do with the content.</p><ul><li>Take a photo and put it in an album? As the number of photos increases, finding them is a problem</li><li>Come across them and then deal with them? Affect your mood and interrupt the flow of work</li><li>Deal with it afterwards? You forget about it as time passes, and when you remember it again, you&#39;re stuck in a cycle.</li><li>Where can I put them? Memo? All kinds of note taking software? Drafting software of any kind? Clipboard management tools?</li></ul><p>If we refer to the four quadrant model of work (importance + priority) and construct four quadrants of content value (frequency of use + content timeliness) to classify the content we receive.</p><ul><li>Low frequency &amp; short duration</li><li>Low frequency &amp; long duration</li><li>High frequency &amp; short duration</li><li>High frequency &amp; long duration</li></ul><p>Combined with the scenes in my own life, I would be troubled by the main focus on</p><ul><li>Low frequency and long duration <ul><li>Contractual documents, which if not saved digitally, would need to be flipped all over the place every time and are extremely important when needed.</li><li>Personal information, addresses, photo IDs, family information, etc. The action of filling out forms makes us stop to remember or ask questions before we can continue, and the text is long and difficult to remember.</li></ul></li><li>High frequency and long duration <ul><li>Lack of a suitable place to store frequently used content that has long-term value, and the need to recall where it was sent each time to copy it.</li><li>Cannot quickly filter out long-lasting content from high-frequency messages, and need to recall them item by item</li></ul></li></ul><p>For myself, I hope I can deal with low-frequency and long-lasting content as efficiently as possible, and high-frequency and long-lasting content with high quality. Everyone&#39;s classification of content will be different, but the similarity of the attribute of long duration will be relatively high. I will think about and design applications for this direction.</p><p>At the same time, for the information that comes to us, we also need to be able to efficiently divide the weight of high-frequency content and assign different attention to it.</p><h3 id="usage-scenes" tabindex="-1"><a class="header-anchor" href="#usage-scenes" aria-hidden="true">#</a> Usage Scenes</h3><ul><li><strong>Addresses</strong> (company address, home address, takeaway address, girlfriend&#39;s home address) and long and stinky, although they can remember but inadvertently need to use</li><li><strong>Bank card numbers</strong>, although all payments are made electronically, but the card numbers that are rarely used and not kept with you in case you need them</li><li><strong>Certificate</strong>, don’t worry about your own ID number, except that it is longer, but girlfriend’s, parents’, father-in-law’s, etc., these are urgent when you need them, and it’s a pity to throw them away when you don’t need them.</li><li>Not recommended - <strong>simple password</strong>, the passwords on the Internet are no longer 123456 can handle, basically all are uppercase and lowercase plus characters, it is troublesome to switch between input methods on mobile phones, non-core passwords can also be stored and used here. However, Alipay, WeChat and other passwords are strongly not recommended to be stored, it is best to keep them in your own mind.</li><li><strong>Email addresses</strong>, are not used in many places, but when they are used, you need to enter a string of characters, then switch the content of the panel to the symbol page, and then switch back, which is too troublesome.</li><li><strong>Templates</strong>, templates for work email replies, customer notification templates, approval flow templates. All of them are stored in the computer, but I can&#39;t find them in the phone at once.</li><li><strong>Messaging</strong>, FAQs form last shift replies, work information is communicated to different people who come to consult, etc. Everyone in the digital world has information that needs to be repeatedly disseminated to others.</li><li><strong>Other miscellaneous</strong>, some things that are not usually used, but will be used and easy to forget, such as social security card number, company business license, etc.</li></ul><h3 id="naming" tabindex="-1"><a class="header-anchor" href="#naming" aria-hidden="true">#</a> Naming</h3><p>Taking the <code>Memorandum</code> as the core, referring to <code>potato</code> from the shape, and finally synthesizing <code>ToMemo</code>.</p><h3 id="goals" tabindex="-1"><a class="header-anchor" href="#goals" aria-hidden="true">#</a> Goals</h3><p>Application Core Goal: <code>Efficiency</code>.</p><h2 id="core-functions" tabindex="-1"><a class="header-anchor" href="#core-functions" aria-hidden="true">#</a> Core functions</h2><ul><li>Memo - Lazy Phrase</li><li>short-term memory - clipboard history</li><li>Third-party extension keyboards <ul><li>Memo</li><li>short-term memory</li><li>Automatically read the clipboard</li><li>Automatically switch back to the previous input method after input</li><li>Personalized keyboard layout</li></ul></li><li>Spotlight search</li><li>Support widgets</li><li>Shortcuts <ul><li>Add short-term memory</li></ul></li></ul><h2 id="planning" tabindex="-1"><a class="header-anchor" href="#planning" aria-hidden="true">#</a> Planning</h2><ul><li>long-term content <ul><li>Enhance content type support, support file and image storage</li><li>Support dynamic variable automatic replacement</li><li>Enhanced content expansion action</li></ul></li><li>special function <ul><li>Add dynamic attributes, such as time, date, etc.</li><li>Refer to Drafts to enhance content output capabilities</li><li>Import import and export</li></ul></li><li>Long-term content <ul><li>short-term memory content editing</li><li>Intelligent filing of short-term memory</li></ul></li><li>major version <ul><li>Mac application development</li></ul></li></ul>',27)]))}const d=t(a,[["render",r],["__file","index.html.vue"]]);export{d as default};
