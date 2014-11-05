module.exports = {
  htmlsplitters: [
    {
      splitters: ['<img ', '<source ', '<script ', '<v:fill '],
      rgx: new RegExp(/(?:src)=['"](?!\w*?:?\/\/)([^'"\{]+)['"].*\/?>/i)
    },
    {
      splitters: ['<link ', '<a '],
      rgx: new RegExp(/(?:href)=['"](?!\w*?:?\/\/)([^'"\{]+)['"].*\/?>/i)
    },
    {
      splitters: ['<source ', '<img '],
      rgx: new RegExp(/(?:srcset)=['"](?!\w*?:?\/\/)([^'"\{]+)['"].*\/?>/i)
    },
    {
      splitters: ['<script '],
      rgx: new RegExp(/data-main=['"](?!\w*?:?\/\/)([^'"\{]+)['"].*\/?>/i)
    }
  ],
  regcss: new RegExp(/url\(([^)]+)\)/ig),

  regcssfilter: new RegExp(/filter[\w\.\:]+\(src=['"]([^'"]+)['"]/ig),

  supportedTypes: {
    html: 'html',
    css: 'css',
    soy: 'html',
    ejs: 'html',
    hbs: 'html'
  }
};
