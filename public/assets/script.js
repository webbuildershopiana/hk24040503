var items = document.querySelectorAll('#ibzngi');
          for (var i = 0, len = items.length; i < len; i++) {
            (function(){
const t=this.querySelectorAll(".hamburger1"),e=this.querySelectorAll(".navbar-collapse");for(let n=0;n<t.length;n++)t[n].addEventListener("click",function(){t[n].classList.toggle("active"),e[n].classList.toggle("show")})
}.bind(items[i]))();
          }
          var props = {"iued78":{"name":"","target":"_self","method":"POST","emailenable":false,"formType":"SIMPLE_FORM","websiteId":1727,"merchantCode":"hk24040503","formInitUrl":"https://api.shopiana.in/api/v1/website/form/payment/init?store=hk24040503","paymentCaputreUrl":"https://api.shopiana.in/api/v1/website/form/payment/capture?store=hk24040503","formDataurl":"https://api.shopiana.in/api/v1/wbWebsite/1727/form/formData?store=hk24040503","websiteName":"HK Ecommerce","websiteNumber":"9571212693","websiteEmail":"xyz@gmail.com"}};
          var ids = Object.keys(props).map(function(id) { return '#'+id }).join(',');
          var els = document.querySelectorAll(ids);
          for (var i = 0, len = els.length; i < len; i++) {
            var el = els[i];
            (function({name:t,formDataurl:e,emailenable:n,websiteId:r,formInitUrl:o,paymentCaputreUrl:i,formType:s,price:a,websiteNumber:l,websiteName:c,websiteEmail:u,emailTemplateId:p}){console.log(a);const d=this;this.addEventListener("submit",h=>{if(h.preventDefault(),!t||!a)return void alert("Oops! We encountered a problem. Please check form name and price.");if(!(t&&r&&s&&e&&o&&i))return void alert("Oops! We encountered a problem. Please try again later.");const f=document.createElement("script");f.src="https://checkout.razorpay.com/v1/checkout.js",f.async=!0,document.head.appendChild(f);const g=new FormData(d);for(let t=0;t<d.elements.length;t++){const e=d.elements[t];e.name&&("INPUT"===e.tagName?"text"===e.type||"number"===e.type||"email"===e.type?g[e.name]=e.value:"checkbox"===e.type&&(g[e.name]=e.checked):("TEXTAREA"===e.tagName||"SELECT"===e.tagName)&&(g[e.name]=e.value))}g.append("formName",t),g.append("price",a),n&&p>0&&(g.append("emailEnabled",n),g.append("emailTemplateId",p)),fetch(e,{method:"POST",body:g}).then(t=>{if(t.ok)return t.json();throw new Error("API call failed")}).then(t=>{if("SIMPLE_FORM"===s)return d.reset(),void alert("details saved successfully");const e={websiteFormId:null==t?void 0:t.id,amount:null==t?void 0:t.price,websiteId:r,integrationKeys:{},paymentId:"",paymentModule:"wb_razorpay",paymentToken:"",paymentType:"ONLINEPAYMENT"},n=new Headers;n.append("Content-Type","application/json");const a={method:"POST",headers:n,body:JSON.stringify(e)};fetch(o,a).then(t=>{if(t.ok)return t.json();throw new Error("API call failed")}).then(e=>{var o;try{if(e){const s={},a={key:null===(o=null==e?void 0:e.metadata)||void 0===o?void 0:o.keyId,amount:null==s?void 0:s.amount,currency:"INR",name:"NJ collections",description:"",image:"",order_id:null==e?void 0:e.paymentToken,receipt:"receipt_order_"+(null==e?void 0:e.orderId),handler:o=>{const s={amount:null==e?void 0:e.amount,integrationKeys:{},paymentId:null==o?void 0:o.razorpay_payment_id,paymentModule:"wb_razorpay",paymentToken:null==o?void 0:o.razorpay_order_id,paymentType:"ONLINEPAYMENT",websiteFormId:null==t?void 0:t.id,websiteId:r,signature:null==o?void 0:o.razorpay_signature,transactionType:"AUTHORIZECAPTURE"},a={method:"POST",headers:n,body:JSON.stringify(s)};fetch(i,a).then(t=>{if(t.ok)return t.json();throw new Error("API call failed")}).then(t=>{d.reset(),alert(`Payment Successfully Received! Payment ID: ${s.paymentId}`)}).catch(t=>{console.log(t)})},prefill:{name:c,email:u,contact:l},theme:{color:"#3399cc"}},p=new window.Razorpay(a);p.open(),p.on("payment.failed",function(t){alert(t.error.description)})}else console.log("PICKBAZAR_ERROR.SOMETHING_WENT_WRONG")}catch(s){console.log(s)}}).catch(t=>{console.error("Error during API call:",t)})}).catch(t=>{console.error("Error during API call:",t)})})}.bind(el))(props[el.id]);
          }var items = document.querySelectorAll('#ikmyhs');
          for (var i = 0, len = items.length; i < len; i++) {
            (function(){
const t=this.querySelectorAll(".hamburger2"),e=this.querySelectorAll(".navbar-collapse");for(let n=0;n<t.length;n++)t[n].addEventListener("click",function(){t[n].classList.toggle("active"),e[n].classList.toggle("show")})
}.bind(items[i]))();
          }