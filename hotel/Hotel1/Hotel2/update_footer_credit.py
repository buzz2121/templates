import os, glob, re

files = glob.glob(r'c:\Users\vansh\Downloads\Hotel2\*.html')

pattern = re.compile(r'<div class="flex items-center gap-2">\s*<span class="text-white/20 text-xs">Crafted</span>\s*<span class="text-gold text-xs">✦</span>\s*<span class="text-white/20 text-xs">by Buzz Entertainment</span>\s*</div>', re.DOTALL)

replacement = '''<div class="flex items-center gap-2">
                    <span class="text-white/30 text-xs">Developed by</span>
                    <span class="text-gold text-xs">Buzz Entertainment</span>
                </div>'''

for f in files:
    with open(f, 'r', encoding='utf-8') as fh:
        content = fh.read()
    
    if pattern.search(content):
        new_content = pattern.sub(replacement, content)
        with open(f, 'w', encoding='utf-8') as fh:
            fh.write(new_content)
        print(f'Updated footer in: {os.path.basename(f)}')
    else:
        print(f'Pattern not found in: {os.path.basename(f)}')
