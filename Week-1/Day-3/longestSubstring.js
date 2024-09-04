function substring (s) {
    left = 0
    right = 1
    max = 0
    max_str = ''
    str = ''

    for (right; right < s.length; right++) {
        if (str.includes(s[right])) {
            left = right
            if (str.length > max) {
                max = str.length
                max_str = str
            }
            str = ''
        }
        else
            str += s[right]

    }

    console.log('max_str: ', max_str, ' // max_len: ', max);
}

substring('abcabcbb')
substring('bbbbb')
substring('GEEKSFORGEEKS')