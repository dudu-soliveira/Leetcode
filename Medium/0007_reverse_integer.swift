// https://leetcode.com/problems/reverse-integer/

class Solution {
    func reverse(_ x: Int) -> Int {
        var reversed = 0
        var exp = 1
        var digits: [Int] = []
        let sign = x > 0 ? 1 : -1
        let x = x * sign

        var edge = false
        let maxExp = 1_000_000_000
        var maxDigits: [Int] = []

        // If x is bigger than a billion, mark it as an edge case
        // and set the integer limit as the positive or negative, depending on the sign of x
        if x / maxExp != 0 {
            edge = true
            maxDigits = [2, 1, 4, 7, 4, 8, 3, 6, 4]
            if sign == 1 { maxDigits.append(7) } else { maxDigits.append(8) }
        }

        while x / exp != 0 {
            // Check if exp is already at a billion, so that it doesn't surpass the limit
            if exp == maxExp {
                digits.append(x / exp)
                break
            }
            digits.append((x % (exp * 10)) / (exp))
            exp *= 10
        }

        // When it isn't an edge case, the value of exp is multiplied one extra time
        // to be able to apply the rest operation in the last digit,
        // this needs to be canceled before the next step
        if edge == false {
            exp /= 10
        }

        for i in 0..<digits.count {
            let digit = digits[i]

            if edge {
                let maxDigit = maxDigits[i]
                if digit > maxDigit {
                    return 0
                } else if digit < maxDigit {
                    edge = false
                }
            }

            reversed += (digit * exp)
            exp /= 10
        }

        return reversed * sign
    }
}
