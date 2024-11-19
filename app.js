var isValid = function(s) {
    if(s.length % 2 !== 0) return false

    const parenthesis = new Map([['{', '}'], ['(', ')'], ['[', ']']])

    const stack = []
    for(let i=0; i < s.length; i++){
        const char = s[i]
        if ( parenthesis.has(char)){
            stack.push(char)
        } else {
            const e = stack.pop()
            if(char !== parenthesis.get(e)) return false
        }
    }

    return stack.length === 0
};