webpackJsonp([15],{221:function(a,e,n){n(583);var i=n(4)(n(372),n(518),"data-v-3ee41dfb",null);a.exports=i.exports},278:function(a,e,n){n(323);var i=n(4)(n(284),n(314),"data-v-abb0289c",null);a.exports=i.exports},284:function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(300),r=n.n(i);e.default={data:function(){return{country:this.value,countries:r.a}},props:{value:{type:String,default:""}},watch:{country:function(a){this.countrySelected(a)}},methods:{countrySelected:function(a){this.$emit("change"),this.$emit("input",a)}}}},297:function(a,e,n){e=a.exports=n(1)(),e.push([a.i,".country-picker[data-v-abb0289c]{width:100%}label[data-v-abb0289c]{font-weight:500}",""])},300:function(a,e){a.exports={AF:"Afghanistan",AX:"Åland Islands",AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AQ:"Antarctica",AG:"Antigua and Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia",BA:"Bosnia and Herzegovina",BW:"Botswana",BV:"Bouvet Island",BR:"Brazil",IO:"British Indian Ocean Territory",BN:"Brunei Darussalam",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CV:"Cape Verde",KY:"Cayman Islands",CF:"Central African Republic",TD:"Chad",CL:"Chile",CN:"China",CX:"Christmas Island",CC:"Cocos (Keeling) Islands",CO:"Colombia",KM:"Comoros",CG:"Congo",CD:"Congo, The Democratic Republic of the",CK:"Cook Islands",CR:"Costa Rica",CI:"Cote D'Ivoire",HR:"Croatia",CU:"Cuba",CY:"Cyprus",CZ:"Czech Republic",DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",ET:"Ethiopia",FK:"Falkland Islands (Malvinas)",FO:"Faroe Islands",FJ:"Fiji",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",TF:"French Southern Territories",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GG:"Guernsey",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",HM:"Heard Island and Mcdonald Islands",VA:"Holy See (Vatican City State)",HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran, Islamic Republic Of",IQ:"Iraq",IE:"Ireland",IM:"Isle of Man",IL:"Israel",IT:"Italy",JM:"Jamaica",JP:"Japan",JE:"Jersey",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",KP:"Democratic People's Republic of Korea",KR:"Korea, Republic of",XK:"Kosovo",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Lao People's Democratic Republic",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libyan Arab Jamahiriya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:"Macao",MK:"Macedonia, The Former Yugoslav Republic of",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",YT:"Mayotte",MX:"Mexico",FM:"Micronesia, Federated States of",MD:"Moldova, Republic of",MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:"Myanmar",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Netherlands",AN:"Netherlands Antilles",NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestinian Territory, Occupied",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:"Philippines",PN:"Pitcairn",PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",RE:"Reunion",RO:"Romania",RU:"Russian Federation",RW:"Rwanda",SH:"Saint Helena",KN:"Saint Kitts and Nevis",LC:"Saint Lucia",PM:"Saint Pierre and Miquelon",VC:"Saint Vincent and the Grenadines",WS:"Samoa",SM:"San Marino",ST:"Sao Tome and Principe",SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",GS:"South Georgia and the South Sandwich Islands",ES:"Spain",LK:"Sri Lanka",SD:"Sudan",SR:"Suriname",SJ:"Svalbard and Jan Mayen",SZ:"Swaziland",SE:"Sweden",CH:"Switzerland",SY:"Syrian Arab Republic",TW:"Taiwan",TJ:"Tajikistan",TZ:"Tanzania, United Republic of",TH:"Thailand",TL:"Timor-Leste",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad and Tobago",TN:"Tunisia",TR:"Turkey",TM:"Turkmenistan",TC:"Turks and Caicos Islands",TV:"Tuvalu",UG:"Uganda",UA:"Ukraine",AE:"United Arab Emirates",GB:"United Kingdom",US:"United States",UM:"United States Minor Outlying Islands",UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VE:"Venezuela",VN:"Viet Nam",VG:"Virgin Islands, British",VI:"Virgin Islands, U.S.",WF:"Wallis and Futuna",EH:"Western Sahara",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe"}},314:function(a,e){a.exports={render:function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",{staticClass:"country-picker"},[n("label",{attrs:{for:"movie"}},[a._v("Select country")]),a._v(" "),n("md-select",{attrs:{required:""},model:{value:a.country,callback:function(e){a.country=e},expression:"country"}},a._l(Object.keys(a.countries),function(e){return n("md-option",{attrs:{value:e}},[a._v(a._s(a.countries[e]))])}))],1)},staticRenderFns:[]}},323:function(a,e,n){var i=n(297);"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);n(2)("25df374e",i,!0)},372:function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(8),r=n(278),t=n.n(r),s=(n(5),n(7)),o=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(a[i]=n[i])}return a};e.default={name:"Register",data:function(){return{user:{type:"",firstName:"",lastName:"",username:"",password:"",confirmPassword:"",country:"",email:""},invalidInput:[],registerProgress:0,passwordIsSame:!0,passwordStrength:!0}},watch:{"user.password":function(a){a.length<8?this.passwordStrength=!1:this.passwordStrength=!0,a===this.user.confirmPassword?this.passwordIsSame=!0:this.passwordIsSame=!1},"user.confirmPassword":function(a){a===this.user.password?this.passwordIsSame=!0:this.passwordIsSame=!1}},components:{countryPicker:t.a},methods:o({},n.i(i.b)(["register"]),{isInvalidExist:function(a){return-1!==this.invalidInput.indexOf(a)},checkInvalidInput:function(){var a=this;Object.keys(this.user).forEach(function(e){""===a.user[e]&&a.invalidInput.push(e)})},removeInvalidInput:function(a){var e=this.invalidInput.indexOf(a);e>-1&&this.invalidInput.splice(e,1)},onRegister:function(){var a=this;if(this.checkInvalidInput(),0===this.invalidInput.length&&this.passwordIsSame&&this.passwordStrength)var e=setInterval(function(){if(a.registerProgress<100)a.registerProgress+=15;else{clearInterval(e);var n={ref:a,user:a.user};a.register(n)}},100)},registerSuccess:function(a){s.bus.$emit("showAlert",a),this.$router.go(-1)}}),created:function(){window.document.title="Register - EcJob.com"}}},413:function(a,e,n){e=a.exports=n(1)(),e.push([a.i,".register-wrapper[data-v-3ee41dfb]{top:8%;margin:0 auto;max-width:550px}label[data-v-3ee41dfb]{font-weight:500!important}.container[data-v-3ee41dfb]{width:100%;height:100%}",""])},518:function(a,e){a.exports={render:function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",{staticClass:"container"},[n("md-card",{staticClass:"register-wrapper"},[n("md-progress",{directives:[{name:"show",rawName:"v-show",value:0!==a.registerProgress,expression:"registerProgress !== 0"}],staticClass:"md-warn",attrs:{"md-progress":a.registerProgress}}),a._v(" "),n("md-card-header",[n("div",{staticClass:"md-title"},[a._v("Sign Up")])]),a._v(" "),n("form",{on:{submit:function(e){e.stopPropagation(),e.preventDefault(),a.onRegister(e)}}},[n("md-card-content",[a.isInvalidExist("type")?n("div",{staticClass:"md-error",staticStyle:{color:"#f44336","font-size":"12px"}},[a._v("You must select the user type")]):a._e(),a._v(" "),n("div",[n("md-radio",{attrs:{name:"my-test-group1","md-value":"freelancer"},on:{change:function(e){a.removeInvalidInput("type")}},model:{value:a.user.type,callback:function(e){a.user.type=e},expression:"user.type"}},[a._v("Freelancer")]),a._v(" "),n("md-radio",{attrs:{name:"my-test-group1","md-value":"employer"},on:{change:function(e){a.removeInvalidInput("type")}},model:{value:a.user.type,callback:function(e){a.user.type=e},expression:"user.type"}},[a._v("Employer")])],1),a._v(" "),n("md-input-container",{class:{"md-input-invalid":a.isInvalidExist("firstName")}},[n("label",[a._v("Enter First Name")]),a._v(" "),n("md-input",{attrs:{required:""},on:{change:function(e){a.removeInvalidInput("firstName")}},model:{value:a.user.firstName,callback:function(e){a.user.firstName=e},expression:"user.firstName"}})],1),a._v(" "),n("md-input-container",{class:{"md-input-invalid":a.isInvalidExist("lastName")}},[n("label",[a._v("Enter Last Name")]),a._v(" "),n("md-input",{attrs:{required:""},on:{change:function(e){a.removeInvalidInput("lastName")}},model:{value:a.user.lastName,callback:function(e){a.user.lastName=e},expression:"user.lastName"}})],1),a._v(" "),n("md-input-container",{class:{"md-input-invalid":a.isInvalidExist("country")}},[n("country-picker",{on:{change:function(e){a.removeInvalidInput("country")}},model:{value:a.user.country,callback:function(e){a.user.country=e},expression:"user.country"}})],1),a._v(" "),n("md-input-container",{class:{"md-input-invalid":a.isInvalidExist("email")}},[n("label",[a._v("Enter Email")]),a._v(" "),n("md-input",{attrs:{type:"email",required:""},on:{change:function(e){a.removeInvalidInput("email")}},model:{value:a.user.email,callback:function(e){a.user.email=e},expression:"user.email"}})],1),a._v(" "),n("md-input-container",{class:{"md-input-invalid":a.isInvalidExist("username")}},[n("label",[a._v("Enter Username")]),a._v(" "),n("md-input",{attrs:{required:""},on:{change:function(e){a.removeInvalidInput("username")}},model:{value:a.user.username,callback:function(e){a.user.username=e},expression:"user.username"}})],1),a._v(" "),n("md-input-container",{class:{"md-input-invalid":a.isInvalidExist("password")||!a.passwordStrength},attrs:{"md-has-password":""}},[n("label",[a._v("Enter Password")]),a._v(" "),n("md-input",{attrs:{type:"password",required:""},on:{change:function(e){a.removeInvalidInput("password")}},model:{value:a.user.password,callback:function(e){a.user.password=e},expression:"user.password"}}),a._v(" "),a.passwordStrength?a._e():n("span",{staticClass:"md-error"},[a._v("Passwords must be at least 8 characters in length.")])],1),a._v(" "),n("md-input-container",{class:{"md-input-invalid":a.isInvalidExist("confirmPassword")||!a.passwordIsSame},attrs:{"md-has-password":""}},[n("label",[a._v("Retype Password:")]),a._v(" "),n("md-input",{attrs:{type:"password",required:""},on:{change:function(e){a.removeInvalidInput("confirmPassword")}},model:{value:a.user.confirmPassword,callback:function(e){a.user.confirmPassword=e},expression:"user.confirmPassword"}}),a._v(" "),a.passwordIsSame?a._e():n("span",{staticClass:"md-error"},[a._v("Password don't match.")])],1),a._v(" "),n("router-link",{attrs:{to:"/login",exact:""}},[a._v("Already Have an Account?")])],1),a._v(" "),n("md-card-actions",[n("md-button",{attrs:{type:"submit"}},[a._v("Sign Up")])],1)],1)],1)],1)},staticRenderFns:[]}},583:function(a,e,n){var i=n(413);"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);n(2)("72631eaa",i,!0)}});
//# sourceMappingURL=15.build.js.map