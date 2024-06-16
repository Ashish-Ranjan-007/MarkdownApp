import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import markdownit from 'markdown-it';

dotenv.config()
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.post("/markdown", async (req, res)=>{

      // console.log("api called") 
      // console.log(req.body);
      try {             
        const md = markdownit({
        html:         true,

        // Use '/' to close single tags (<br />).
        // This is only for full CommonMark compatibility.
        xhtmlOut:     true,

        // Convert '\n' in paragraphs into <br>
        breaks:       true,

        // CSS language prefix for fenced blocks. Can be
        // useful for external highlighters.
        langPrefix:   'language-',

        // Autoconvert URL-like text to links
        linkify:      true,

        // Enable some language-neutral replacement + quotes beautification
        // For the full list of replacements, see https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.mjs
        typographer:  true,

        // Double + single quotes replacement pairs, when typographer enabled,
        // and smartquotes on. Could be either a String or an Array.
        //
        // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
        // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
        quotes: '“”‘’',

        highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
        try {
        return hljs.highlight(str, { language: lang }).value;
        } catch (__) {}
        }
        return ''; // use external default escaping
        }
        
        })
        const result = await md.render(req.body.mddata);
        //result is obtained by md.render
        console.log("result", result)
        res.status(200).json(result);
        //result is send back 
      } catch (err) {
        res.status(500).json(err);
      }

});


app.listen(port ,()=>console.log("Server has Started" ,port))
