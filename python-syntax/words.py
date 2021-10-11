def print_upper_words(strings):
    for string in strings:
        print(string.upper())


def print_upper_words2(strings):
    """getting only words that starts with E"""
    for string in strings:
        if string.startswith('e') or string.startswith('E'):
            print(string.upper())


def print_upper_words3(strings, must_start_with):
    for string in strings:
        for letter in must_start_with:
            if string.startswith(letter):
                print(string.upper())
                break
