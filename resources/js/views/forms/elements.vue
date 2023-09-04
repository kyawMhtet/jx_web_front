<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../components/page-header.vue";

export default {
  data() {
    return {
      title: "Basic Elements",
      items: [
        {
          text: "Forms",
          href: "/",
        },
        {
          text: "Basic Elements",
          active: true,
        },
      ],
      inputVal: "Input Value",
      readOnly: "Readonly input",
      disabledInput: "Disabled input",
      pass: 44512465,
      colorInput: "#364574",
      file: null,
      multipleFiles: [],
      disabledFile: null
    };
  },
  components: {
    Layout,
    PageHeader,
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    
    <b-row>
        <b-col lg="12">
            <b-card no-body>
                <b-card-header>
                    <b-card-title class="mb-0">Input Example</b-card-title>
                </b-card-header>
                <b-card-body>
                    <b-row class="gy-4">
                        <b-col xxl="3" md="6">
                        <div>
                            <label for="basicInput" class="form-label">Basic Input</label>
                            <b-form-input id="basicInput"></b-form-input>
                        </div>
                        </b-col>
                        

                        <b-col xxl="3" md="6">
                        <div>
                            <label for="labelInput" class="form-label">Input with Label</label>
                            <b-form-input id="labelInput"></b-form-input>
                        </div>
                        </b-col>
                        

                        <b-col xxl="3" md="6">
                        <div>
                            <label for="placeholderInput" class="form-label">Input with Placeholder</label>
                            <b-form-input id="placeholderInput" placeholder="Placeholder"></b-form-input>
                        </div>
                        </b-col>
                        

                        <b-col xxl="3" md="6">
                        <div>
                            <label for="valueInput" class="form-label">Input with Value</label>
                            <b-form-input id="valueInput" v-model="inputVal"></b-form-input>
                        </div>
                        </b-col>
                        
                        <b-col xxl="3" md="6">
                        <div>
                            <label for="readonlyPlaintext" class="form-label">Readonly Plain Text Input</label>
                            <b-form-input type="text" id="readonlyPlaintext" v-model="readOnly" readonly plaintext></b-form-input>
                        </div>
                        </b-col>
                        

                        <b-col xxl="3" md="6">
                            <div>
                                <label for="readonlyInput" class="form-label">Readonly Input</label>
                                <b-form-input type="text" id="readonlyInput" v-model="readOnly" value="Readonly input" readonly></b-form-input>
                            </div>
                        </b-col>
                        

                        <b-col xxl="3" md="6">
                            <div>
                                <label for="disabledInput" class="form-label">Disabled Input</label>
                                <b-form-input type="text" id="disabledInput" value="Disabled input" v-model="disabledInput" disabled></b-form-input>
                            </div>
                        </b-col>
                        

                        <b-col xxl="3" md="6">
                            <div>
                                <label for="iconInput" class="form-label">Input with Icon</label>
                                <b-input-group>
                                    <b-input-group-append>
                                    <b-input-group-text><i class="ri-mail-unread-line"></i></b-input-group-text>
                                    </b-input-group-append>
                                    <b-form-input type="email" id="iconInput" placeholder="example@gmail.com"></b-form-input>
                                </b-input-group>
                            </div>
                        </b-col>
                        
                        <b-col xxl="3" md="6">
                            <div>
                                <label for="iconrightInput" class="form-label">Input with Icon Right</label>
                                <b-input-group>
                                    <b-form-input type="email" id="iconrightInput" placeholder="example@gmail.com"></b-form-input>
                                    <b-input-group-append>
                                    <b-input-group-text><i class="ri-mail-unread-line"></i></b-input-group-text>
                                    </b-input-group-append>
                                </b-input-group>
                            </div>
                        </b-col>
                        

                        <b-col xxl="3" md="6">
                            <div>
                                <label for="exampleInputdate" class="form-label">Input Date</label>
                                <b-form-input type="date" id="exampleInputdate"></b-form-input>
                            </div>
                        </b-col>
                        

                        <b-col xxl="3" md="6">
                            <div>
                                <label for="exampleInputtime" class="form-label">Input Time</label>
                                <b-form-input type="time" id="exampleInputtime"></b-form-input>
                            </div>
                        </b-col>
                        

                        <b-col xxl="3" md="6">
                            <div>
                                <label for="exampleInputpassword" class="form-label">Input Password</label>
                                <b-form-input type="password" id="exampleInputpassword" v-model="pass"></b-form-input>
                            </div>
                        </b-col>
                        
                        <b-col xxl="3" md="6">
                            <div>
                                <label for="exampleFormControlTextarea5" class="form-label">Example Textarea</label>
                                <b-form-textarea id="exampleFormControlTextarea5" rows="3"></b-form-textarea>
                            </div>
                        </b-col>
                        

                        <b-col xxl="3" md="6">
                            <div>
                                <label for="formtextInput" class="form-label">Form Text</label>
                                <b-form-input type="password" id="formtextInput"></b-form-input>
                                <div id="passwordHelpBlock" class="form-text">
                                    Must be 8-20 characters long.
                                </div>
                            </div>
                        </b-col>
                        

                        <b-col xxl="3" md="6">
                            <div>
                                <label for="colorPicker" class="form-label">Color Picker</label>
                                <b-form-input type="color" class="w-100" v-model="colorInput" id="colorPicker"></b-form-input>
                            </div>
                        </b-col>
                        

                        <b-col xxl="3" md="6">
                            <div>
                                <label for="borderInput" class="form-label">Input Border Style</label>
                                <b-form-input type="text" id="borderInput" placeholder="Enter your name" class="border-dashed"></b-form-input>
                            </div>
                        </b-col>
                        
                        <b-col xxl="3" md="6">
                            <label for="exampleDataList" class="form-label">Datalist example</label>
                            <b-form-input list="datalistOptions" id="exampleDataList" placeholder="Search your country..."></b-form-input>
                            <datalist id="datalistOptions">
                            <option value="Switzerland"></option>
                            <option value="New York"></option>
                            <option value="France"></option>
                            <option value="Spain"></option>
                            <option value="Chicago"></option>
                            <option value="Bulgaria"></option>
                            <option value="Hong Kong"></option>
                            </datalist>
                        </b-col>
                        
                        <b-col xxl="3" md="6">
                            <div>
                                <label for="exampleInputrounded" class="form-label">Rounded Input</label>
                                <b-form-input type="text" id="exampleInputrounded" placeholder="Enter your name" class="rounded-pill"></b-form-input>
                            </div>
                        </b-col>
                        

                        <b-col xxl="3" md="6">
                            <div class="form-floating">
                                <b-form-input type="text" id="firstnamefloatingInput" placeholder="Enter your firstname"></b-form-input>
                                <label for="firstnamefloatingInput">Floating Input</label>
                            </div>
                        </b-col>
                        
                    </b-row>
                    
                </b-card-body>
                <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                    <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                </b-card-body>
                <b-card-body>
<pre class="language-markup" style="height: 450px;">
<code>&lt;!-- Basic Input --&gt;
&lt;div&gt;
    &lt;label for="basicInput" class="form-label"&gt;Basic Input&lt;/label&gt;
    &lt;b-form-input id="basicInput"&gt;&lt;/b-form-input&gt;
&lt;/div&gt;
</code>

<code>&lt;!-- Input with Label --&gt;
&lt;div&gt;
    &lt;label for="labelInput" class="form-label"&gt;Input with Label&lt;/label&gt;
    &lt;b-form-input id="labelInput"&gt;&lt;/b-form-input&gt;
&lt;/div&gt;
</code>

<code>&lt;!-- Input with Placeholder --&gt;
&lt;div&gt;
    &lt;label for="placeholderInput" class="form-label"&gt;Input with Placeholder&lt;/label&gt;
    &lt;b-form-input id="placeholderInput" placeholder="Placeholder"&gt;&lt;/b-form-input&gt;
&lt;/div&gt;
</code>

<code>&lt;!-- Input with Value --&gt;
&lt;div&gt;
    &lt;label for="valueInput" class="form-label"&gt;Input with Value&lt;/label&gt;
    &lt;b-form-input id="valueInput" v-model="inputVal" value="Input value"&gt;&lt;/b-form-input&gt;
&lt;/div&gt;
</code>

<code>&lt;!-- Readonly Plain Text Input --&gt;
&lt;div&gt;
    &lt;label for="readonlyPlaintext" class="form-label"&gt;Readonly Plain Text Input&lt;/label&gt;
    &lt;b-form-input type="text" id="readonlyPlaintext" v-model="readOnly" readonly plaintext&gt;&lt;/b-form-input&gt;
&lt;/div&gt;
</code>

<code>&lt;!-- Readonly Input --&gt;
&lt;div&gt;
    &lt;label for="readonlyInput" class="form-label"&gt;Readonly Input&lt;/label&gt;
    &lt;b-form-input type="text" id="readonlyInput" v-model="readOnly" value="Readonly input" readonly&gt;&lt;/b-form-input&gt;
&lt;/div&gt;
</code>

<code>&lt;!-- Disabled Input --&gt;
&lt;div&gt;
    &lt;label for="disabledInput" class="form-label"&gt;Disabled Input&lt;/label&gt;
    &lt;b-form-input type="text" id="disabledInput" value="Disabled input" v-model="disabledInput" disabled&gt;&lt;/b-form-input&gt;
&lt;/div&gt;
</code>

<code>&lt;!-- Input with Icon --&gt;
&lt;div&gt;
    &lt;label for="iconInput" class="form-label"&gt;Input with Icon&lt;/label&gt;
    &lt;b-input-group&gt;
        &lt;b-input-group-append&gt;
        &lt;b-input-group-text&gt;&lt;i class="ri-mail-unread-line"&gt;&lt;/i&gt;&lt;/b-input-group-text&gt;
        &lt;/b-input-group-append&gt;
        &lt;b-form-input type="email" id="iconInput" placeholder="example@gmail.com"&gt;&lt;/b-form-input&gt;
    &lt;/b-input-group&gt;
&lt;/div&gt;
</code>

<code>&lt;!-- Input with Icon Right --&gt;
&lt;div&gt;
    &lt;label for="iconrightInput" class="form-label"&gt;Input with Icon Right&lt;/label&gt;
    &lt;b-input-group&gt;
        &lt;b-form-input type="email" id="iconrightInput" placeholder="example@gmail.com"&gt;&lt;/b-form-input&gt;
        &lt;b-input-group-append&gt;
        &lt;b-input-group-text&gt;&lt;i class="ri-mail-unread-line"&gt;&lt;/i&gt;&lt;/b-input-group-text&gt;
        &lt;/b-input-group-append&gt;
    &lt;/b-input-group&gt;
&lt;/div&gt;
</code>

<code>&lt;!-- Input Date --&gt;
&lt;div&gt;
    &lt;label for="exampleInputdate" class="form-label"&gt;Input Date&lt;/label&gt;
    &lt;b-form-input type="date" id="exampleInputdate"&gt;&lt;/b-form-input&gt;
&lt;/div&gt;
</code>

<code>&lt;!-- Input Time --&gt;
&lt;div&gt;
    &lt;label for="exampleInputtime" class="form-label"&gt;Input Time&lt;/label&gt;
    &lt;b-form-input type="time" id="exampleInputtime"&gt;&lt;/b-form-input&gt;
&lt;/div&gt;
</code>

<code>&lt;!-- Input Password --&gt;
&lt;div&gt;
    &lt;label for="exampleInputpassword" class="form-label"&gt;Input Password&lt;/label&gt;
    &lt;b-form-input type="password" id="exampleInputpassword" value="44512465" v-model="pass"&gt;&lt;/b-form-input&gt;
&lt;/div&gt;
</code>

<code>&lt;!-- Example Textarea --&gt;
&lt;div&gt;
    &lt;label for="exampleFormControlTextarea5" class="form-label"&gt;Example Textarea&lt;/label&gt;
    &lt;b-form-textarea id="exampleFormControlTextarea5" rows="3"&gt;&lt;/b-form-textarea&gt;
&lt;/div&gt;
</code>

<code>&lt;!-- Form Text --&gt;
&lt;div&gt;
    &lt;label for="formtextInput" class="form-label"&gt;Form Text&lt;/label&gt;
    &lt;b-form-input type="password" id="formtextInput"&gt;&lt;/b-form-input&gt;
    &lt;div id="passwordHelpBlock" class="form-text"&gt;
        Must be 8-20 characters long.
    &lt;/div&gt;
&lt;/div&gt;
</code>

<code>&lt;!-- Color Picker --&gt;
&lt;div&gt;
    &lt;label for="colorPicker" class="form-label"&gt;Color Picker&lt;/label&gt;
    &lt;b-form-input type="color" class="w-100" v-model="colorInput" id="colorPicker"&gt;&lt;/b-form-input&gt;
&lt;/div&gt;
</code>

<code>&lt;!-- Input Border Style --&gt;
&lt;div&gt;
    &lt;label for="borderInput" class="form-label"&gt;Input Border Style&lt;/label&gt;
    &lt;b-form-input type="text" id="borderInput" placeholder="Enter your name" class="border-dashed"&gt;&lt;/b-form-input&gt;
&lt;/div&gt;
</code>

<code>&lt;!-- Datalist example --&gt;
&lt;label for="exampleDataList" class="form-label"&gt;Datalist example&lt;/label&gt;
&lt;b-form-input list="datalistOptions" id="exampleDataList" placeholder="Search your country..."&gt;&lt;/b-form-input&gt;
&lt;datalist id="datalistOptions"&gt;
    &lt;option value="Switzerland"&gt;&lt;/option&gt;
    &lt;option value="New York"&gt;&lt;/option&gt;
    &lt;option value="France"&gt;&lt;/option&gt;
    &lt;option value="Spain"&gt;&lt;/option&gt;
    &lt;option value="Chicago"&gt;&lt;/option&gt;
    &lt;option value="Bulgaria"&gt;&lt;/option&gt;
    &lt;option value="Hong Kong"&gt;&lt;/option&gt;
&lt;/datalist&gt;
</code>

<code>&lt;!-- Rounded Input --&gt;
&lt;div&gt;
    &lt;label for="exampleInputrounded" class="form-label"&gt;Rounded Input&lt;/label&gt;
    &lt;b-form-input type="text" id="exampleInputrounded" placeholder="Enter your name" class="rounded-pill"&gt;&lt;/b-form-input&gt;
&lt;/div&gt;
</code>

<code>&lt;!-- Floating Input --&gt;
&lt;div class="form-floating"&gt;
    &lt;b-form-input type="text" id="firstnamefloatingInput" placeholder="Enter your firstname"&gt;&lt;/b-form-input&gt;
    &lt;label for="firstnamefloatingInput"&gt;Floating Input&lt;/label&gt;
&lt;/div&gt;
</code></pre>
                </b-card-body>
            </b-card>
        </b-col>
        
    </b-row>
    

    <b-row>
        <b-col lg="12">
            <b-card no-body>
                <b-card-header>
                    <b-card-title class="mb-0">Input Sizing</b-card-title>
                </b-card-header>
                <b-card-body>
                    <p class="text-muted">Use <code>lg</code> size attribute to set large size input and Use <code>sm</code> size attribute to set small size input. No class is needed for default size input.</p>
                    <b-row align-v="center" class="g-3">
                        <b-col lg="4">
                            <b-form-input size="sm" placeholder=".form-control-sm"></b-form-input>
                        </b-col>
                        
                        <b-col lg="4">
                            <b-form-input placeholder=".form-control"></b-form-input>
                        </b-col>
                        
                        <b-col lg="4">
                            <b-form-input size="lg" placeholder=".form-control-lg"></b-form-input>
                        </b-col>
                        
                    </b-row>
                    
                </b-card-body>
                <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                    <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                </b-card-body>
                <b-card-body>
                    <pre class="language-markup">
<code>&lt;!-- Form Control Sm --&gt;
&lt;b-form-input size="sm" placeholder=".form-control-sm"&gt;&lt;/b-form-input&gt;
</code>
<code>&lt;!-- Form Control Default --&gt;
&lt;b-form-input placeholder=".form-control"&gt;&lt;/b-form-input&gt;
</code>
<code>&lt;!-- Form Control Lg --&gt;
&lt;b-form-input size="lg" placeholder=".form-control-lg"&gt;&lt;/b-form-input&gt;
</code></pre>
                </b-card-body>
            </b-card>
        </b-col>
        
    </b-row>
    

    <b-row>
        <b-col lg="12">
            <b-card no-body>
                <b-card-header>
                    <b-card-title class="mb-0">Input Group</b-card-title>
                </b-card-header>
                <b-card-body>
                    <div>
                        <h5 class="fs-base">Basic example</h5>
                        <p class="text-muted">Use <code>input-group</code> class to div element which contains input attribute to wrap a default input in the group.</p>
                        <b-row class="g-3">
                            <b-col lg="6">
                                <div class="input-group">
                                    <span class="input-group-text" id="basic-addon1">@</span>
                                    <b-form-input type="text" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></b-form-input>
                                </div>
                            </b-col>
                            
                            <b-col lg="6">
                                <div class="input-group">
                                    <b-form-input type="text" placeholder="Recipient's username" aria-label="Recipient's username"></b-form-input>
                                    <span class="input-group-text" id="basic-addon2">@example.com</span>
                                </div>
                            </b-col>
                            
                            <b-col lg="12">
                                <div class="input-group">
                                    <span class="input-group-text">$</span>
                                    <b-form-input type="text" aria-label="Amount (to the nearest dollar)"></b-form-input>
                                    <span class="input-group-text">.00</span>
                                </div>
                            </b-col>
                            
                            <b-col lg="12">
                                <div class="input-group">
                                    <b-form-input type="text" placeholder="Username" aria-label="Username"></b-form-input>
                                    <span class="input-group-text">@</span>
                                    <b-form-input type="text" placeholder="Server" aria-label="Server"></b-form-input>
                                </div>
                            </b-col>
                            
                            <b-col lg="6">
                                <div class="input-group">
                                    <span class="input-group-text">With textarea</span>
                                    <b-form-textarea aria-label="With textarea" rows="2"></b-form-textarea>
                                </div>
                            </b-col>
                            
                            <b-col lg="6">
                                <label for="basic-url" class="form-label">Your vanity URL</label>
                                <div class="input-group">
                                    <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
                                    <b-form-input type="text" id="basic-url" aria-describedby="basic-addon3"></b-form-input>
                                </div>
                            </b-col>
                            
                        </b-row>
                    </div>

                    <div class="mt-4">
                        <h5 class="fs-base">Wrapping</h5>
                        <p class="text-muted">Input groups wrap by default via <code>flex-wrap: wrap</code> in order to accommodate custom form field validation within an input group. You may disable this with <code>flex-nowrap</code> class.</p>
                        <div class="input-group flex-nowrap">
                            <span class="input-group-text" id="addon-wrapping">@</span>
                            <b-form-input type="text" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"></b-form-input>
                        </div>
                    </div>
                </b-card-body>
                <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                    <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                </b-card-body>
                <b-card-body>
                    <pre class="language-markup" style="height: 275px;">
<code>&lt;!-- Basic example --&gt;
&lt;div class="input-group"&gt;
    &lt;span class="input-group-text" id="basic-addon1"&gt;@&lt;/span&gt;
    &lt;b-form-input type="text" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"&gt;&lt;/b-form-input&gt;
&lt;/div&gt;</code>
<code>
&lt;div class="input-group"&gt;
    &lt;b-form-input type="text" placeholder="Recipient's username" aria-label="Recipient's username"&gt;&lt;/b-form-input&gt;
    &lt;span class="input-group-text" id="basic-addon2"&gt;@example.com&lt;/span&gt;
&lt;/div&gt;</code>
<code>
&lt;div class="input-group"&gt;
    &lt;span class="input-group-text"&gt;$&lt;/span&gt;
    &lt;b-form-input type="text" aria-label="Amount (to the nearest dollar)"&gt;&lt;/b-form-input&gt;
    &lt;span class="input-group-text"&gt;.00&lt;/span&gt;
&lt;/div&gt;</code>
<code>
&lt;div class="input-group"&gt;
    &lt;b-form-input type="text" placeholder="Username" aria-label="Username"&gt;&lt;/b-form-input&gt;
    &lt;span class="input-group-text"&gt;@&lt;/span&gt;
    &lt;b-form-input type="text" placeholder="Server" aria-label="Server"&gt;&lt;/b-form-input&gt;
&lt;/div&gt;</code>
<code>
&lt;div class="input-group"&gt;
    &lt;span class="input-group-text"&gt;With textarea&lt;/span&gt;
    &lt;b-form-textarea aria-label="With textarea" rows="2"&gt;&lt;/b-form-textarea&gt;
&lt;/div&gt;</code>
<code>
&lt;label for="basic-url" class="form-label"&gt;Your vanity URL&lt;/label&gt;
&lt;div class="input-group"&gt;
    &lt;span class="input-group-text" id="basic-addon3"&gt;https://example.com/users/&lt;/span&gt;
    &lt;b-form-input type="text" id="basic-url" aria-describedby="basic-addon3"&gt;&lt;/b-form-input&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Wrapping --&gt;
&lt;div class="input-group flex-nowrap"&gt;
    &lt;span class="input-group-text" id="addon-wrapping"&gt;@&lt;/span&gt;
    &lt;b-form-input type="text" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"&gt;&lt;/b-form-input&gt;
&lt;/div&gt;</code></pre>
                </b-card-body>
            </b-card>
        </b-col>
        
    </b-row>
    

    <b-row>
        <b-col lg="12">
            <b-card no-body>
                <b-card-header>
                    <b-card-title class="mb-0">Input Group Sizing</b-card-title>
                </b-card-header>
                <b-card-body>
                    <p class="text-muted">Use <code>input-group-sm</code> class to set a small size input group and <code>input-group-lg</code> class to input-group class to set a large size input group respectively. no such class is required for a default size input group.</p>
                    <b-row class="align-items-center g-3">
                        <b-col lg="4">
                            <b-input-group size="sm">
                                <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
                                <b-form-input type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></b-form-input>
                            </b-input-group>
                        </b-col>
                        <b-col lg="4">
                            <b-input-group>
                                <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
                                <b-form-input type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></b-form-input>
                            </b-input-group>
                        </b-col>
                        <b-col lg="4">
                            <b-input-group size="lg">
                                <span class="input-group-text" id="inputGroup-sizing-lg">Large</span>
                                <b-form-input type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"></b-form-input>
                            </b-input-group>
                        </b-col>
                    </b-row>
                </b-card-body>
                <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                    <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                </b-card-body>
                <b-card-body>
                    <pre class="language-markup" style="height: 275px;">
<code>&lt;!-- Input Group Sizing --&gt;
&lt;b-input-group size="sm"&gt;
    &lt;span class="input-group-text" id="inputGroup-sizing-sm"&gt;Small&lt;/span&gt;
    &lt;b-form-input type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"&gt;&lt;/b-form-input&gt;
&lt;/b-input-group&gt;</code>
<code>
&lt;b-input-group&gt;
    &lt;span class="input-group-text" id="inputGroup-sizing-default"&gt;Default&lt;/span&gt;
    &lt;b-form-input type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"&gt;&lt;/b-form-input&gt;
&lt;/b-input-group&gt;</code>
<code>
&lt;b-input-group size="lg"&gt;
    &lt;span class="input-group-text" id="inputGroup-sizing-lg"&gt;Large&lt;/span&gt;
    &lt;b-form-input type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"&gt;&lt;/b-form-input&gt;
&lt;/b-input-group&gt;</code></pre>
                </b-card-body>
            </b-card>
        </b-col>
        
    </b-row>
    

    <b-row>
        <b-col lg="12">
            <b-card no-body>
                <b-card-header>
                    <b-card-title class="mb-0">Multiple Inputs</b-card-title>
                </b-card-header>
                <b-card-body>
                    <p class="text-muted">While multiple <code>&lt;input&gt;</code>s are supported visually, validation styles are only available for input groups with a single <code>&lt;input&gt;</code>.</p>
                    <div>
                        <b-input-group class="mb-3">
                            <span class="input-group-text">First and last name</span>
                            <b-form-input type="text" aria-label="First name" class="form-control"></b-form-input>
                            <b-form-input type="text" aria-label="Last name" class="form-control"></b-form-input>
                        </b-input-group>

                        <b-input-group class="mb-3">
                            <span class="input-group-text">$</span>
                            <span class="input-group-text">0.00</span>
                            <b-form-input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)"></b-form-input>
                        </b-input-group>

                        <b-input-group>
                            <b-form-input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)"></b-form-input>
                            <span class="input-group-text">$</span>
                            <span class="input-group-text">0.00</span>
                        </b-input-group>
                    </div>
                </b-card-body>
                <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                    <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                </b-card-body>
                <b-card-body>
<pre class="language-markup" style="height: 275px;">
<code>&lt;!-- Multiple Inputs --&gt;
&lt;b-input-group class="mb-3"&gt;
    &lt;span class="input-group-text"&gt;First and last name&lt;/span&gt;
    &lt;b-form-input type="text" aria-label="First name" class="form-control"&gt;&lt;/b-form-input&gt;
    &lt;b-form-input type="text" aria-label="Last name" class="form-control"&gt;&lt;/b-form-input&gt;
&lt;/b-input-group&gt;</code>
<code>
&lt;b-input-group class="mb-3"&gt;
    &lt;span class="input-group-text"&gt;$&lt;/span&gt;
    &lt;span class="input-group-text"&gt;0.00&lt;/span&gt;
    &lt;b-form-input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)"&gt;&lt;/b-form-input&gt;
&lt;/b-input-group&gt;</code>
<code>
&lt;b-input-group&gt;
    &lt;b-form-input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)"&gt;&lt;/b-form-input&gt;
    &lt;span class="input-group-text"&gt;$&lt;/span&gt;
    &lt;span class="input-group-text"&gt;0.00&lt;/span&gt;
&lt;/b-input-group&gt;</code></pre>
                </b-card-body>
            </b-card>
        </b-col>
        
    </b-row>
    

    <b-row>
        <b-col lg="12">
            <b-card no-body>
                <b-card-header>
                    <b-card-title class="mb-0">Buttons, Checkboxs and Radios Group</b-card-title>
                </b-card-header>
                <b-card-body>
                    <div>
                        <p class="text-muted">Use any checkbox, radio, or button option within an input group’s addon instead of text. We recommend adding <code>mt-0</code> class to the <code>form-check-input</code> when there’s no visible text next to the input.</p>
                        <b-row class="g-3">
                            <b-col lg="6">
                                <b-input-group>
                                    <b-input-group-prepend>
                                        <b-input-group-text>
                                        <b-form-checkbox aria-label="Checkbox for following text input"></b-form-checkbox>
                                    </b-input-group-text>
                                    </b-input-group-prepend>
                                    <b-form-input type="text" class="form-control" aria-label="Text input with checkbox"></b-form-input>
                                </b-input-group>
                            </b-col>
                            <b-col lg="6">
                                <b-input-group>
                                    <b-input-group-prepend>
                                    <b-input-group-text>
                                            <b-form-radio aria-label="Radio button for following text input"></b-form-radio>
                                    </b-input-group-text>
                                    </b-input-group-prepend>
                                    <b-form-input type="text" class="form-control" aria-label="Text input with radio button"></b-form-input>
                                </b-input-group>
                            </b-col>
                            <b-col lg="6">
                                <b-input-group>
                                    <b-button class="btn-outline-primary" id="button-addon1" variant="outline-primary" size="sm">Button</b-button>
                                    <b-form-input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"></b-form-input>
                                </b-input-group>
                            </b-col>
                            <b-col lg="6">
                                <b-input-group>
                                    <b-form-input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2"></b-form-input>
                                    <b-button class="btn-outline-success" id="button-addon2" variant="outline-success" size="sm">Button</b-button>
                                </b-input-group>
                            </b-col>
                            <b-col lg="6">
                                <b-input-group>
                                    <b-button class="btn-primary" type="button">Button</b-button>
                                    <b-button class="btn-success" type="button">Button</b-button>
                                    <b-form-input type="text" class="form-control" placeholder="" aria-label="Example text with two button addons"></b-form-input>
                                </b-input-group>
                            </b-col>
                            <b-col lg="6">
                                <b-input-group>
                                    <b-form-input type="text" class="form-control" aria-label="Recipient's username with two button addons"></b-form-input>
                                    <b-button class="btn-primary" type="button">Button</b-button>
                                    <b-button class="btn-success" type="button">Button</b-button>
                                </b-input-group>
                            </b-col>
                        </b-row>
                    </div>
                </b-card-body>
                <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                    <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                </b-card-body>
                <b-card-body>
<pre class="language-markup" style="height: 275px;">
<code>&lt;!-- Checkbox Input --&gt;
&lt;b-input-group&gt;
    &lt;b-input-group-prepend&gt;
        &lt;b-input-group-text&gt;
            &lt;b-form-checkbox aria-label="Checkbox for following text input"&gt;&lt;/b-form-checkbox&gt;
        &lt;/b-input-group-text&gt;
    &lt;/b-input-group-prepend&gt;
    &lt;b-form-input type="text" class="form-control" aria-label="Text input with checkbox"&gt;&lt;/b-form-input&gt;
&lt;/b-input-group&gt;</code>
<code>
&lt;!-- Radio Input --&gt;
&lt;b-input-group&gt;
    &lt;b-input-group-prepend&gt;
        &lt;b-input-group-text&gt;
            &lt;b-form-radio aria-label="Radio button for following text input"&gt;&lt;/b-form-radio&gt;
        &lt;/b-input-group-text&gt;
    &lt;/b-input-group-prepend&gt;
    &lt;b-form-input type="text" class="form-control" aria-label="Text input with radio button"&gt;&lt;/b-form-input&gt;
&lt;/b-input-group&gt;</code>

<code>&lt;!-- Buttons Input --&gt;
&lt;b-input-group&gt;
    &lt;b-button class="btn-outline-primary" id="button-addon1" variant="outline-primary" size="sm"&gt;Button&lt;/b-button&gt;
    &lt;b-form-input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"&gt;&lt;/b-form-input&gt;
&lt;/b-input-group&gt;</code>
<code>&lt;b-input-group&gt;
    &lt;b-form-input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2"&gt;&lt;/b-form-input&gt;
    &lt;b-button class="btn-outline-success" id="button-addon2" variant="outline-success" size="sm"&gt;Button&lt;/b-button&gt;
&lt;/b-input-group&gt;
</code>
<code>&lt;b-input-group&gt;
    &lt;b-button class="btn-primary" type="button"&gt;Button&lt;/b-button&gt;
    &lt;b-button class="btn-success" type="button"&gt;Button&lt;/b-button&gt;
    &lt;b-form-input type="text" class="form-control" placeholder="" aria-label="Example text with two button addons"&gt;&lt;/b-form-input&gt;
&lt;/b-input-group&gt;
</code>
<code>&lt;b-input-group&gt;
    &lt;b-form-input type="text" class="form-control" aria-label="Recipient's username with two button addons"&gt;&lt;/b-form-input&gt;
    &lt;b-button class="btn-primary" type="button"&gt;Button&lt;/b-button&gt;
    &lt;b-button class="btn-success" type="button"&gt;Button&lt;/b-button&gt;
&lt;/b-input-group&gt;</code></pre>
                </b-card-body>
            </b-card>
        </b-col>
        
    </b-row>
    

    <b-row>
        <b-col lg="12">
            <b-card no-body>
                <b-card-header>
                    <b-card-title class="mb-0">Buttons with dropdowns</b-card-title>
                </b-card-header>
                <b-card-body>
                    <div>
                        <p class="text-muted">You can use a button with the dropdown toggle to set the file input group.</p>
                        <b-row class="g-3">
                            <b-col lg="6">
                                <b-input-group>
                                    <b-dropdown variant="primary" text="Dropdown">
                                        <b-dropdown-menu>
                                            <b-dropdown-item href="#">Action</b-dropdown-item>
                                            <b-dropdown-item href="#">Another action</b-dropdown-item>
                                            <b-dropdown-item href="#">Something else here</b-dropdown-item>
                                            <b-dropdown-divider></b-dropdown-divider>
                                            <b-dropdown-item href="#">Separated link</b-dropdown-item>
                                        </b-dropdown-menu>
                                    </b-dropdown>
                                    <b-form-input type="text" class="form-control" aria-label="Text input with dropdown button"></b-form-input>
                                </b-input-group>
                            </b-col>
                            <b-col lg="6">
                                <b-input-group>
                                    <b-form-input type="text" class="form-control" aria-label="Text input with dropdown button"></b-form-input>
                                    <b-dropdown variant="success" text="Dropdown">
                                        <b-dropdown-menu class="dropdown-menu-end">
                                            <b-dropdown-item href="#">Action</b-dropdown-item>
                                            <b-dropdown-item href="#">Another action</b-dropdown-item>
                                            <b-dropdown-item href="#">Something else here</b-dropdown-item>
                                            <b-dropdown-divider></b-dropdown-divider>
                                            <b-dropdown-item href="#">Separated link</b-dropdown-item>
                                        </b-dropdown-menu>
                                    </b-dropdown>
                                </b-input-group>
                            </b-col>
                            <b-col lg="12">
                                <b-input-group>
                                    <b-dropdown variant="outline-secondary" text="Dropdown">
                                        <b-dropdown-menu>
                                            <b-dropdown-item href="#">Action before</b-dropdown-item>
                                            <b-dropdown-item href="#">Another action before</b-dropdown-item>
                                            <b-dropdown-item href="#">Something else here</b-dropdown-item>
                                            <b-dropdown-divider></b-dropdown-divider>
                                            <b-dropdown-item href="#">Separated link</b-dropdown-item>
                                        </b-dropdown-menu>
                                    </b-dropdown>
                                    <b-form-input type="text" class="form-control" aria-label="Text input with 2 dropdown buttons"></b-form-input>
                                    <b-dropdown variant="outline-secondary" text="Dropdown">
                                        <b-dropdown-menu class="dropdown-menu-end">
                                            <b-dropdown-item href="#">Action</b-dropdown-item>
                                            <b-dropdown-item href="#">Another action</b-dropdown-item>
                                            <b-dropdown-item href="#">Something else here</b-dropdown-item>
                                            <b-dropdown-divider></b-dropdown-divider>
                                            <b-dropdown-item href="#">Separated link</b-dropdown-item>
                                        </b-dropdown-menu>
                                    </b-dropdown>
                                </b-input-group>
                            </b-col>
                        </b-row>
                    </div>
                </b-card-body>
                <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                    <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                </b-card-body>
                <b-card-body>
<pre class="language-markup" style="height: 275px;">
<code>&lt;!-- Buttons with dropdowns --&gt;
&lt;b-input-group&gt;
    &lt;b-dropdown variant="primary" text="Dropdown"&gt;
        &lt;b-dropdown-menu&gt;
            &lt;b-dropdown-item href="#"&gt;Action&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href="#"&gt;Another action&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href="#"&gt;Something else here&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
            &lt;b-dropdown-item href="#"&gt;Separated link&lt;/b-dropdown-item&gt;
        &lt;/b-dropdown-menu&gt;
    &lt;/b-dropdown&gt;
    &lt;b-form-input type="text" class="form-control" aria-label="Text input with dropdown button"&gt;&lt;/b-form-input&gt;
&lt;/b-input-group&gt;</code>
<code>
&lt;b-input-group&gt;
    &lt;b-form-input type="text" class="form-control" aria-label="Text input with dropdown button"&gt;&lt;/b-form-input&gt;
    &lt;b-dropdown variant="success" text="Dropdown"&gt;
        &lt;b-dropdown-menu class="dropdown-menu-end"&gt;
            &lt;b-dropdown-item href="#"&gt;Action&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href="#"&gt;Another action&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href="#"&gt;Something else here&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
            &lt;b-dropdown-item href="#"&gt;Separated link&lt;/b-dropdown-item&gt;
        &lt;/b-dropdown-menu&gt;
    &lt;/b-dropdown&gt;
&lt;/b-input-group&gt;</code>
<code>
&lt;b-input-group&gt;
    &lt;b-dropdown variant="outline-secondary" text="Dropdown"&gt;
        &lt;b-dropdown-menu&gt;
            &lt;b-dropdown-item href="#"&gt;Action before&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href="#"&gt;Another action before&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href="#"&gt;Something else here&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
            &lt;b-dropdown-item href="#"&gt;Separated link&lt;/b-dropdown-item&gt;
        &lt;/b-dropdown-menu&gt;
    &lt;/b-dropdown&gt;
    &lt;b-form-input type="text" class="form-control" aria-label="Text input with 2 dropdown buttons"&gt;&lt;/b-form-input&gt;
    &lt;b-dropdown variant="outline-secondary" text="Dropdown"&gt;
        &lt;b-dropdown-menu class="dropdown-menu-end"&gt;
            &lt;b-dropdown-item href="#"&gt;Action&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href="#"&gt;Another action&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href="#"&gt;Something else here&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
            &lt;b-dropdown-item href="#"&gt;Separated link&lt;/b-dropdown-item&gt;
        &lt;/b-dropdown-menu&gt;
    &lt;/b-dropdown&gt;
&lt;/b-input-group&gt;</code></pre>
                </b-card-body>
            </b-card>
        </b-col>
        
    </b-row>
    

    <b-row>
        <b-col lg="12">
            <b-card no-body>
                <b-card-header>
                    <b-card-title class="mb-0">Custom Forms</b-card-title>
                </b-card-header>
                <b-card-body>
                    <p class="text-muted">Input groups include support for custom selects and custom file inputs. Browser default versions of these are not supported.</p>
                    <div>
                        <h5 class="fs-base mb-3">Select</h5>
                        <b-row class="g-3">
                            <b-col lg="6">
                                <b-input-group>
                                    <label for="inputGroupSelect01" class="input-group-text">Options</label>
                                    <b-form-select id="inputGroupSelect01" v-model="selectedOption">
                                        <option value="">Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </b-form-select>
                                </b-input-group>
                            </b-col>
                            <b-col lg="6">
                                <b-input-group>
                                    <b-form-select id="inputGroupSelect02" v-model="selectedOption2">
                                        <option value="">Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </b-form-select>
                                    <label for="inputGroupSelect02" class="input-group-text">Options</label>
                                </b-input-group>
                            </b-col>
                            <b-col lg="6">
                                <b-input-group>
                                    <b-button variant="outline-primary">Button</b-button>
                                    <b-form-select id="inputGroupSelect03" v-model="selectedOption3" aria-label="Example select with button addon">
                                        <option value="">Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </b-form-select>
                                </b-input-group>
                            </b-col>
                            <b-col lg="6">
                                <b-input-group>
                                    <b-form-select id="inputGroupSelect04" v-model="selectedOption4" aria-label="Example select with button addon">
                                        <option value="">Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </b-form-select>
                                    <b-button variant="outline-secondary">Button</b-button>
                                </b-input-group>
                            </b-col>
                        </b-row>
                    </div>

                </b-card-body>
                <b-card-body class="bg-light border-bottom border-top bg-opacity-25">
                    <h5 class="fs-xs text-muted mb-0">HTML Preview</h5>
                </b-card-body>
                <b-card-body>
                    <pre class="language-markup" style="height: 275px;">
<code>&lt;!-- Select --&gt;
&lt;b-input-group&gt;
    &lt;label for="inputGroupSelect01" class="input-group-text"&gt;Options&lt;/label&gt;
    &lt;b-form-select id="inputGroupSelect01" v-model="selectedOption"&gt;
        &lt;option value=""&gt;Choose...&lt;/option&gt;
        &lt;option value="1"&gt;One&lt;/option&gt;
        &lt;option value="2"&gt;Two&lt;/option&gt;
        &lt;option value="3"&gt;Three&lt;/option&gt;
    &lt;/b-form-select&gt;
&lt;/b-input-group&gt;</code>
<code>
&lt;b-input-group&gt;
    &lt;b-form-select id="inputGroupSelect02" v-model="selectedOption2"&gt;
        &lt;option value=""&gt;Choose...&lt;/option&gt;
        &lt;option value="1"&gt;One&lt;/option&gt;
        &lt;option value="2"&gt;Two&lt;/option&gt;
        &lt;option value="3"&gt;Three&lt;/option&gt;
    &lt;/b-form-select&gt;
    &lt;label for="inputGroupSelect02" class="input-group-text"&gt;Options&lt;/label&gt;
&lt;/b-input-group&gt;</code>
<code>
&lt;b-input-group&gt;
    &lt;b-button variant="outline-primary"&gt;Button&lt;/b-button&gt;
    &lt;b-form-select id="inputGroupSelect03" v-model="selectedOption3" aria-label="Example select with button addon"&gt;
        &lt;option value=""&gt;Choose...&lt;/option&gt;
        &lt;option value="1"&gt;One&lt;/option&gt;
        &lt;option value="2"&gt;Two&lt;/option&gt;
        &lt;option value="3"&gt;Three&lt;/option&gt;
    &lt;/b-form-select&gt;
&lt;/b-input-group&gt;</code>
<code>
&lt;b-input-group&gt;
    &lt;b-form-select id="inputGroupSelect04" v-model="selectedOption4" aria-label="Example select with button addon"&gt;
        &lt;option value=""&gt;Choose...&lt;/option&gt;
        &lt;option value="1"&gt;One&lt;/option&gt;
        &lt;option value="2"&gt;Two&lt;/option&gt;
        &lt;option value="3"&gt;Three&lt;/option&gt;
    &lt;/b-form-select&gt;
    &lt;b-button variant="outline-secondary"&gt;Button&lt;/b-button&gt;
&lt;/b-input-group&gt;</code></pre>
                </b-card-body>
            </b-card>
        </b-col>
        
    </b-row>
    
    </Layout>
</template>