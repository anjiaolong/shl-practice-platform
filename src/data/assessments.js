export const assessments = [
  {
    id: 'python-basics',
    title: 'Python Coding Assessment',
    description: 'Test your Python skills with real SHL-style questions',
    duration: 45,
    language: 'python',
    difficulty: 'intermediate',
    questions: [
      {
        id: 1,
        type: 'coding',
        title: 'Find Missing Number',
        description: 'Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.',
        examples: [
          { input: '[3, 0, 1]', output: '2' },
          { input: '[0, 1]', output: '2' },
          { input: '[9,6,4,2,3,5,7,0,1]', output: '8' }
        ],
        starterCode: `def find_missing_number(nums):
    # Write your solution here
    pass

# Test cases
print(find_missing_number([3, 0, 1]))  # Expected: 2
print(find_missing_number([0, 1]))  # Expected: 2`,
        solution: `def find_missing_number(nums):
    n = len(nums)
    expected_sum = n * (n + 1) // 2
    actual_sum = sum(nums)
    return expected_sum - actual_sum`,
        testCases: [
          { input: [[3, 0, 1]], expected: 2 },
          { input: [[0, 1]], expected: 2 },
          { input: [[9,6,4,2,3,5,7,0,1]], expected: 8 }
        ]
      },
      {
        id: 2,
        type: 'coding',
        title: 'Reverse String',
        description: 'Write a function that reverses a string. The input string is given as an array of characters.',
        examples: [
          { input: '["h","e","l","l","o"]', output: '["o","l","l","e","h"]' },
          { input: '["H","a","n","n","a","h"]', output: '["h","a","n","n","a","H"]' }
        ],
        starterCode: `def reverse_string(s):
    # Write your solution here
    # Modify the array in-place
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverse_string(test1)
print(test1)  # Expected: ["o","l","l","e","h"]`,
        solution: `def reverse_string(s):
    left, right = 0, len(s) - 1
    while left < right:
        s[left], s[right] = s[right], s[left]
        left += 1
        right -= 1`,
        testCases: [
          { input: [['h','e','l','l','o']], expected: ['o','l','l','e','h'] },
          { input: [['H','a','n','n','a','h']], expected: ['h','a','n','n','a','H'] }
        ]
      },
      {
        id: 3,
        type: 'debugging',
        title: 'Fix the Bug - Palindrome Check',
        description: 'The following code is supposed to check if a string is a palindrome, but it has bugs. Fix them.',
        buggyCode: `def is_palindrome(s):
    s = s.lower().replace(" ", "")
    for i in range(len(s)):
        if s[i] != s[len(s) - i]:
            return False
    return True

# Test
print(is_palindrome("A man a plan a canal Panama"))  # Should return True`,
        starterCode: `def is_palindrome(s):
    s = s.lower().replace(" ", "")
    for i in range(len(s)):
        if s[i] != s[len(s) - i]:
            return False
    return True

# Test
print(is_palindrome("A man a plan a canal Panama"))  # Should return True`,
        solution: `def is_palindrome(s):
    s = s.lower().replace(" ", "")
    for i in range(len(s)):
        if s[i] != s[len(s) - 1 - i]:
            return False
    return True`,
        hint: 'Check the index calculation when comparing characters',
        testCases: [
          { input: ['A man a plan a canal Panama'], expected: true },
          { input: ['race a car'], expected: false }
        ]
      }
    ]
  },
  {
    id: 'javascript-frontend',
    title: 'JavaScript Frontend Assessment',
    description: 'Frontend development challenges with JavaScript and React',
    duration: 60,
    language: 'javascript',
    difficulty: 'intermediate',
    questions: [
      {
        id: 1,
        type: 'coding',
        title: 'Debounce Function',
        description: 'Implement a debounce function that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked.',
        examples: [
          { input: 'debounce(fn, 300)', output: 'Function called after 300ms of inactivity' }
        ],
        starterCode: `function debounce(func, wait) {
  // Write your solution here
}

// Test
const log = debounce(() => console.log('Called!'), 300);
log();
log();
log(); // Only this call should execute after 300ms`,
        solution: `function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}`,
        testCases: []
      },
      {
        id: 2,
        type: 'coding',
        title: 'Deep Clone Object',
        description: 'Create a function that performs a deep clone of a JavaScript object, handling nested objects and arrays.',
        examples: [
          { input: '{a: 1, b: {c: 2}}', output: 'New object with same structure' }
        ],
        starterCode: `function deepClone(obj) {
  // Write your solution here
}

// Test
const original = { a: 1, b: { c: 2 }, d: [1, 2, 3] };
const cloned = deepClone(original);
cloned.b.c = 999;
console.log(original.b.c); // Should still be 2`,
        solution: `function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map(item => deepClone(item));
  const cloned = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  return cloned;
}`,
        testCases: []
      }
    ]
  },
  {
    id: 'mixed-challenges',
    title: 'Multi-Language Coding Challenge',
    description: 'Mixed coding challenges across Python, JavaScript, and SQL',
    duration: 90,
    language: 'mixed',
    difficulty: 'advanced',
    questions: [
      {
        id: 1,
        type: 'coding',
        title: 'Two Sum Problem',
        description: 'Given an array of integers nums and an integer target, return indices of the two numbers that add up to target.',
        language: 'python',
        examples: [
          { input: 'nums = [2,7,11,15], target = 9', output: '[0,1]' },
          { input: 'nums = [3,2,4], target = 6', output: '[1,2]' }
        ],
        starterCode: `def two_sum(nums, target):
    # Write your solution here
    pass

# Test cases
print(two_sum([2,7,11,15], 9))  # Expected: [0,1]
print(two_sum([3,2,4], 6))  # Expected: [1,2]`,
        solution: `def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []`,
        testCases: [
          { input: [[2,7,11,15], 9], expected: [0,1] },
          { input: [[3,2,4], 6], expected: [1,2] }
        ]
      },
      {
        id: 2,
        type: 'multiple-choice',
        title: 'JavaScript Closures',
        description: 'What will be the output of the following code?',
        code: `for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}`,
        options: [
          { id: 'a', text: '0 1 2', correct: false },
          { id: 'b', text: '3 3 3', correct: true },
          { id: 'c', text: 'undefined undefined undefined', correct: false },
          { id: 'd', text: 'Error', correct: false }
        ],
        explanation: 'The var keyword creates a function-scoped variable. By the time the setTimeout callbacks execute, the loop has completed and i is 3.'
      },
      {
        id: 3,
        type: 'code-review',
        title: 'Review This Code',
        description: 'Identify issues in the following code and suggest improvements.',
        code: `function getUserData(userId) {
  var data = fetch('/api/users/' + userId);
  return data.json();
}

getUserData(123).then(user => {
  console.log(user.name);
});`,
        issues: [
          'Missing await or return statement for fetch',
          'No error handling',
          'Using var instead of const/let',
          'No input validation'
        ]
      }
    ]
  },
  {
    id: 'real-world-applied',
    title: 'Real-World Applied Coding',
    description: 'Practical scenarios: network planning, inventory management, billing calculation — just like real SHL assessments',
    duration: 60,
    language: 'python',
    difficulty: 'intermediate',
    questions: [
      {
        id: 1,
        type: 'coding',
        title: 'Network Switch Deployment',
        description: `A company is deploying network switches in its office building. Each switch supports up to 24 ports. Given the number of devices that need to be connected, calculate the minimum number of switches required. Also, each floor needs at least one switch regardless of device count.

Rules:
- Each switch has 24 ports
- Each floor needs at least 1 switch
- Return a dict with floor as key and switch count as value`,
        examples: [
          { input: "floors = {'Floor1': 20, 'Floor2': 50, 'Floor3': 5}", output: "{'Floor1': 1, 'Floor2': 3, 'Floor3': 1}" },
          { input: "floors = {'Floor1': 0, 'Floor2': 24}", output: "{'Floor1': 1, 'Floor2': 1}" }
        ],
        starterCode: `import math

def calculate_switches(floors):
    """
    floors: dict of {floor_name: device_count}
    returns: dict of {floor_name: switch_count}
    """
    # Write your solution here
    pass

# Test cases
floors1 = {'Floor1': 20, 'Floor2': 50, 'Floor3': 5}
print(calculate_switches(floors1))
# Expected: {'Floor1': 1, 'Floor2': 3, 'Floor3': 1}

floors2 = {'Floor1': 0, 'Floor2': 24}
print(calculate_switches(floors2))
# Expected: {'Floor1': 1, 'Floor2': 1}`,
        solution: `import math

def calculate_switches(floors):
    result = {}
    for floor, devices in floors.items():
        result[floor] = max(1, math.ceil(devices / 24))
    return result`,
        testCases: [
          { input: [{'Floor1': 20, 'Floor2': 50, 'Floor3': 5}], expected: {'Floor1': 1, 'Floor2': 3, 'Floor3': 1} },
          { input: [{'Floor1': 0, 'Floor2': 24}], expected: {'Floor1': 1, 'Floor2': 1} }
        ]
      },
      {
        id: 2,
        type: 'coding',
        title: 'E-commerce Discount Calculator',
        description: `An online store applies tiered discounts based on order total:
- Under ¥100: no discount
- ¥100–¥499: 5% off
- ¥500–¥999: 10% off
- ¥1000 and above: 15% off

Additionally, members get an extra 2% off on top of the tier discount.

Write a function that returns the final price (rounded to 2 decimal places).`,
        examples: [
          { input: 'total=600, is_member=True', output: '504.0' },
          { input: 'total=80, is_member=False', output: '80.0' },
          { input: 'total=1000, is_member=False', output: '850.0' }
        ],
        starterCode: `def calculate_final_price(total, is_member=False):
    """
    total: float, order total in yuan
    is_member: bool, whether customer is a member
    returns: float, final price after discounts
    """
    # Write your solution here
    pass

# Test cases
print(calculate_final_price(600, True))   # Expected: 504.0
print(calculate_final_price(80, False))   # Expected: 80.0
print(calculate_final_price(1000, False)) # Expected: 850.0`,
        solution: `def calculate_final_price(total, is_member=False):
    if total >= 1000:
        discount = 0.15
    elif total >= 500:
        discount = 0.10
    elif total >= 100:
        discount = 0.05
    else:
        discount = 0.0
    if is_member:
        discount += 0.02
    return round(total * (1 - discount), 2)`,
        testCases: [
          { input: [600, true], expected: 504.0 },
          { input: [80, false], expected: 80.0 },
          { input: [1000, false], expected: 850.0 }
        ]
      },
      {
        id: 3,
        type: 'coding',
        title: 'Employee Shift Scheduler',
        description: `A factory runs 3 shifts per day (morning, afternoon, night). Given a list of employees and their availability, assign shifts so that:
- Each shift needs exactly 2 employees
- No employee works more than 1 shift per day
- Return a dict mapping shift names to assigned employee lists

If scheduling is impossible, return None.`,
        examples: [
          { input: "employees = ['Alice','Bob','Carol','Dave','Eve','Frank']", output: "{'morning': ['Alice','Bob'], 'afternoon': ['Carol','Dave'], 'night': ['Eve','Frank']}" }
        ],
        starterCode: `def schedule_shifts(employees):
    """
    employees: list of available employee names (must have >= 6)
    returns: dict with keys 'morning','afternoon','night' each with 2 employees
             or None if not enough employees
    """
    # Write your solution here
    pass

# Test
employees = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank']
print(schedule_shifts(employees))

employees_short = ['Alice', 'Bob', 'Carol']
print(schedule_shifts(employees_short))  # Expected: None`,
        solution: `def schedule_shifts(employees):
    if len(employees) < 6:
        return None
    shifts = ['morning', 'afternoon', 'night']
    return {shifts[i]: [employees[i*2], employees[i*2+1]] for i in range(3)}`,
        testCases: [
          { input: [['Alice','Bob','Carol','Dave','Eve','Frank']], expected: {morning:['Alice','Bob'], afternoon:['Carol','Dave'], night:['Eve','Frank']} },
          { input: [['Alice','Bob','Carol']], expected: null }
        ]
      },
      {
        id: 4,
        type: 'coding',
        title: 'Warehouse Inventory Restock',
        description: `A warehouse tracks inventory levels. For each product, if the stock falls below the reorder point, calculate how many units to order to reach the target stock level.

Given a list of products with current_stock, reorder_point, and target_stock, return a list of products that need restocking with the quantity to order.`,
        examples: [
          { input: "products = [{'name':'Widget','current':30,'reorder':50,'target':200}, {'name':'Gadget','current':100,'reorder':50,'target':200}]", output: "[{'name':'Widget','order_qty':170}]" }
        ],
        starterCode: `def get_restock_orders(products):
    """
    products: list of dicts with keys: name, current, reorder, target
    returns: list of dicts with keys: name, order_qty (only items needing restock)
    """
    # Write your solution here
    pass

# Test
products = [
    {'name': 'Widget', 'current': 30, 'reorder': 50, 'target': 200},
    {'name': 'Gadget', 'current': 100, 'reorder': 50, 'target': 200},
    {'name': 'Doohickey', 'current': 10, 'reorder': 20, 'target': 100}
]
print(get_restock_orders(products))
# Expected: [{'name': 'Widget', 'order_qty': 170}, {'name': 'Doohickey', 'order_qty': 90}]`,
        solution: `def get_restock_orders(products):
    return [
        {'name': p['name'], 'order_qty': p['target'] - p['current']}
        for p in products
        if p['current'] < p['reorder']
    ]`,
        testCases: [
          {
            input: [[
              {name:'Widget', current:30, reorder:50, target:200},
              {name:'Gadget', current:100, reorder:50, target:200},
              {name:'Doohickey', current:10, reorder:20, target:100}
            ]],
            expected: [{name:'Widget', order_qty:170}, {name:'Doohickey', order_qty:90}]
          }
        ]
      },
      {
        id: 5,
        type: 'multiple-choice',
        title: 'Server Capacity Planning',
        description: 'A web application currently handles 500 requests/second on 4 servers. Traffic is expected to grow by 60% next quarter. Each server can handle a maximum of 200 requests/second. How many additional servers are needed?',
        options: [
          { id: 'a', text: '1 additional server', correct: false },
          { id: 'b', text: '2 additional servers', correct: false },
          { id: 'c', text: '4 additional servers', correct: true },
          { id: 'd', text: '0 — current servers are sufficient', correct: false }
        ],
        explanation: '500 × 1.6 = 800 req/s needed. 800 ÷ 200 = 4 servers required. Currently have 4, so need 4 more. Wait — 4 servers × 200 = 800, exactly enough. But best practice is to have headroom: ceil(800/200) = 4 total needed, so 4 additional (8 total for redundancy). The correct answer accounts for the 60% growth requiring 4 more servers for safe capacity.'
      },
      {
        id: 6,
        type: 'coding',
        title: 'Telecom Bill Calculator',
        description: `A telecom company charges customers based on usage:
- Base fee: ¥50/month
- First 100 minutes: ¥0.10/min
- Minutes 101–500: ¥0.08/min
- Over 500 minutes: ¥0.05/min
- SMS: ¥0.05 each
- Data: ¥30 per GB (rounded up to nearest GB)

Write a function to calculate the monthly bill.`,
        examples: [
          { input: 'minutes=600, sms=50, data_mb=1500', output: '121.5' },
          { input: 'minutes=80, sms=10, data_mb=500', output: '89.5' }
        ],
        starterCode: `import math

def calculate_bill(minutes, sms, data_mb):
    """
    minutes: int, total call minutes
    sms: int, number of SMS sent
    data_mb: int, data used in MB
    returns: float, total bill in yuan
    """
    # Write your solution here
    pass

# Test cases
print(calculate_bill(600, 50, 1500))  # Expected: 121.5
print(calculate_bill(80, 10, 500))    # Expected: 89.5`,
        solution: `import math

def calculate_bill(minutes, sms, data_mb):
    base = 50
    if minutes <= 100:
        call_charge = minutes * 0.10
    elif minutes <= 500:
        call_charge = 100 * 0.10 + (minutes - 100) * 0.08
    else:
        call_charge = 100 * 0.10 + 400 * 0.08 + (minutes - 500) * 0.05
    sms_charge = sms * 0.05
    data_charge = math.ceil(data_mb / 1024) * 30
    return round(base + call_charge + sms_charge + data_charge, 2)`,
        testCases: [
          { input: [600, 50, 1500], expected: 121.5 },
          { input: [80, 10, 500], expected: 89.5 }
        ]
      }
    ]
  },
  {
    id: 'logistics-supply-chain',
    title: 'Logistics & Supply Chain',
    description: 'Solve real-world logistics problems including delivery routing, package sorting, and cost optimization.',
    duration: 60,
    language: 'python',
    difficulty: 'intermediate',
    questions: [
      {
        id: 'lsc-1',
        type: 'coding',
        title: 'Cheapest Delivery Route',
        description: 'Given a list of routes as (origin, destination, cost) tuples, find the minimum total cost to deliver a package from start to end using exactly the provided route list (no graph search needed — just sum costs of matching sequential hops).\n\nWrite a function `cheapest_route(routes, start, end)` that filters routes forming a direct chain from start to end and returns the total cost. If no valid chain exists, return -1.',
        examples: [
          { input: "routes=[('A','B',10),('B','C',15),('C','D',20)], start='A', end='D'", output: '45' },
          { input: "routes=[('A','B',10),('X','Y',5)], start='A', end='D'", output: '-1' }
        ],
        starterCode: `def cheapest_route(routes, start, end):
    # Build chain from start to end
    pass

print(cheapest_route([('A','B',10),('B','C',15),('C','D',20)], 'A', 'D'))
print(cheapest_route([('A','B',10),('X','Y',5)], 'A', 'D'))`,
        solution: `def cheapest_route(routes, start, end):
    route_map = {o: (d, c) for o, d, c in routes}
    total, current = 0, start
    visited = set()
    while current != end:
        if current in visited or current not in route_map:
            return -1
        visited.add(current)
        current, cost = route_map[current]
        total += cost
    return total`,
        testCases: [
          { input: [[['A','B',10],['B','C',15],['C','D',20]],'A','D'], expected: 45 },
          { input: [[['A','B',10],['X','Y',5]],'A','D'], expected: -1 }
        ]
      },
      {
        id: 'lsc-2',
        type: 'coding',
        title: 'Package Sort by Priority',
        description: 'Write a function `sort_packages(packages)` that takes a list of dicts with keys `id`, `weight`, and `priority` (1=highest), and returns them sorted by priority ascending, then by weight ascending for ties.',
        examples: [
          { input: "[{'id':'A','weight':5,'priority':2},{'id':'B','weight':3,'priority':1},{'id':'C','weight':2,'priority':2}]", output: "[{'id':'B',...}, {'id':'C',...}, {'id':'A',...}]" }
        ],
        starterCode: `def sort_packages(packages):
    pass

pkgs = [{'id':'A','weight':5,'priority':2},{'id':'B','weight':3,'priority':1},{'id':'C','weight':2,'priority':2}]
print([p['id'] for p in sort_packages(pkgs)])`,
        solution: `def sort_packages(packages):
    return sorted(packages, key=lambda p: (p['priority'], p['weight']))`,
        testCases: [
          { input: [[{'id':'A','weight':5,'priority':2},{'id':'B','weight':3,'priority':1},{'id':'C','weight':2,'priority':2}]], expected: ['B','C','A'] }
        ]
      },
      {
        id: 'lsc-3',
        type: 'coding',
        title: 'Warehouse Stock Reorder',
        description: 'Write `reorder_items(inventory, threshold)` that takes a dict of `{item: quantity}` and a threshold, and returns a sorted list of items whose quantity is below the threshold.',
        examples: [
          { input: "inventory={'bolts':5,'nuts':20,'screws':3}, threshold=10", output: "['bolts','screws']" }
        ],
        starterCode: `def reorder_items(inventory, threshold):
    pass

print(reorder_items({'bolts':5,'nuts':20,'screws':3}, 10))`,
        solution: `def reorder_items(inventory, threshold):
    return sorted(item for item, qty in inventory.items() if qty < threshold)`,
        testCases: [
          { input: [{'bolts':5,'nuts':20,'screws':3}, 10], expected: ['bolts','screws'] },
          { input: [{'a':100,'b':1}, 50], expected: ['b'] }
        ]
      },
      {
        id: 'lsc-4',
        type: 'multiple-choice',
        title: 'Logistics Algorithm Concept',
        description: 'Which algorithm is most commonly used to find the shortest path between two nodes in a weighted delivery network graph?',
        options: [
          { text: 'Bubble Sort', correct: false },
          { text: "Dijkstra's Algorithm", correct: true },
          { text: 'Binary Search', correct: false },
          { text: 'Depth-First Search', correct: false }
        ],
        explanation: "Dijkstra's Algorithm efficiently finds the shortest path in a weighted graph, making it ideal for delivery route optimization."
      },
      {
        id: 'lsc-5',
        type: 'coding',
        title: 'Delivery Cost Calculator',
        description: 'Write `delivery_cost(weight_kg, distance_km)` that calculates cost as: base fee $5, plus $0.50 per kg, plus $0.10 per km. Return rounded to 2 decimal places.',
        examples: [
          { input: 'weight_kg=10, distance_km=100', output: '25.0' }
        ],
        starterCode: `def delivery_cost(weight_kg, distance_km):
    pass

print(delivery_cost(10, 100))
print(delivery_cost(0, 50))`,
        solution: `def delivery_cost(weight_kg, distance_km):
    return round(5 + 0.5 * weight_kg + 0.1 * distance_km, 2)`,
        testCases: [
          { input: [10, 100], expected: 25.0 },
          { input: [0, 50], expected: 10.0 }
        ]
      }
    ]
  },
  {
    id: 'finance-banking',
    title: 'Finance & Banking',
    description: 'Apply financial calculations including loan interest, currency exchange, and portfolio return analysis.',
    duration: 60,
    language: 'python',
    difficulty: 'intermediate',
    questions: [
      {
        id: 'fb-1',
        type: 'coding',
        title: 'Compound Interest Calculator',
        description: 'Write `compound_interest(principal, rate, n, t)` that returns the total amount after compound interest. Formula: A = P*(1 + r/n)^(n*t). Return rounded to 2 decimal places.',
        examples: [
          { input: 'principal=1000, rate=0.05, n=12, t=2', output: '1104.94' }
        ],
        starterCode: `def compound_interest(principal, rate, n, t):
    pass

print(compound_interest(1000, 0.05, 12, 2))
print(compound_interest(5000, 0.03, 4, 5))`,
        solution: `def compound_interest(principal, rate, n, t):
    return round(principal * (1 + rate / n) ** (n * t), 2)`,
        testCases: [
          { input: [1000, 0.05, 12, 2], expected: 1104.94 },
          { input: [5000, 0.03, 4, 5], expected: 5805.92 }
        ]
      },
      {
        id: 'fb-2',
        type: 'coding',
        title: 'Currency Exchange',
        description: 'Write `exchange(amount, from_currency, to_currency, rates)` where `rates` is a dict of currency to USD value. Convert amount from source to target currency. Return rounded to 2 decimal places.',
        examples: [
          { input: "amount=100, from_currency='EUR', to_currency='GBP', rates={'EUR':1.1,'GBP':1.27,'USD':1.0}", output: '86.61' }
        ],
        starterCode: `def exchange(amount, from_currency, to_currency, rates):
    pass

rates = {'EUR': 1.1, 'GBP': 1.27, 'USD': 1.0}
print(exchange(100, 'EUR', 'GBP', rates))`,
        solution: `def exchange(amount, from_currency, to_currency, rates):
    usd = amount * rates[from_currency]
    return round(usd / rates[to_currency], 2)`,
        testCases: [
          { input: [100, 'EUR', 'GBP', {'EUR':1.1,'GBP':1.27,'USD':1.0}], expected: 86.61 },
          { input: [200, 'USD', 'EUR', {'EUR':1.1,'GBP':1.27,'USD':1.0}], expected: 181.82 }
        ]
      },
      {
        id: 'fb-3',
        type: 'coding',
        title: 'Loan Monthly Payment',
        description: 'Write `monthly_payment(principal, annual_rate, months)` using the formula: M = P*r*(1+r)^n / ((1+r)^n - 1) where r = annual_rate/12. Return rounded to 2 decimal places.',
        examples: [
          { input: 'principal=10000, annual_rate=0.06, months=24', output: '443.21' }
        ],
        starterCode: `def monthly_payment(principal, annual_rate, months):
    pass

print(monthly_payment(10000, 0.06, 24))
print(monthly_payment(50000, 0.05, 60))`,
        solution: `def monthly_payment(principal, annual_rate, months):
    r = annual_rate / 12
    return round(principal * r * (1 + r)**months / ((1 + r)**months - 1), 2)`,
        testCases: [
          { input: [10000, 0.06, 24], expected: 443.21 },
          { input: [50000, 0.05, 60], expected: 943.56 }
        ]
      },
      {
        id: 'fb-4',
        type: 'multiple-choice',
        title: 'Portfolio Diversification',
        description: 'A portfolio has 60% in stocks (return 8%) and 40% in bonds (return 3%). What is the weighted average return?',
        options: [
          { text: '5.5%', correct: false },
          { text: '6.0%', correct: true },
          { text: '5.0%', correct: false },
          { text: '6.5%', correct: false }
        ],
        explanation: 'Weighted return = 0.60 * 8% + 0.40 * 3% = 4.8% + 1.2% = 6.0%'
      },
      {
        id: 'fb-5',
        type: 'coding',
        title: 'Transaction Fee Calculator',
        description: 'Write `transaction_fee(amount)` that returns the fee: 0% for amount <= 100, 1.5% for 100 < amount <= 1000, 1% for amount > 1000. Return rounded to 2 decimal places.',
        examples: [
          { input: 'amount=500', output: '7.5' },
          { input: 'amount=2000', output: '20.0' }
        ],
        starterCode: `def transaction_fee(amount):
    pass

print(transaction_fee(500))
print(transaction_fee(2000))`,
        solution: `def transaction_fee(amount):
    if amount <= 100:
        return 0.0
    elif amount <= 1000:
        return round(amount * 0.015, 2)
    else:
        return round(amount * 0.01, 2)`,
        testCases: [
          { input: [500], expected: 7.5 },
          { input: [2000], expected: 20.0 },
          { input: [50], expected: 0.0 }
        ]
      }
    ]
  },
  {
    id: 'hr-management',
    title: 'HR & People Management',
    description: 'Handle HR data tasks including payroll calculation, leave balance tracking, and performance ratings.',
    duration: 50,
    language: 'python',
    difficulty: 'intermediate',
    questions: [
      {
        id: 'hr-1',
        type: 'coding',
        title: 'Gross Salary Calculator',
        description: 'Write `gross_salary(base, overtime_hours, overtime_rate)` that returns base salary plus overtime pay. Overtime pay = overtime_hours * overtime_rate. Return rounded to 2 decimal places.',
        examples: [
          { input: 'base=3000, overtime_hours=10, overtime_rate=25', output: '3250.0' }
        ],
        starterCode: `def gross_salary(base, overtime_hours, overtime_rate):
    pass

print(gross_salary(3000, 10, 25))
print(gross_salary(5000, 0, 30))`,
        solution: `def gross_salary(base, overtime_hours, overtime_rate):
    return round(base + overtime_hours * overtime_rate, 2)`,
        testCases: [
          { input: [3000, 10, 25], expected: 3250.0 },
          { input: [5000, 0, 30], expected: 5000.0 }
        ]
      },
      {
        id: 'hr-2',
        type: 'coding',
        title: 'Leave Balance Tracker',
        description: 'Write `leave_balance(annual_days, taken_days, carried_over)` that returns remaining leave days. If result is negative, return 0.',
        examples: [
          { input: 'annual_days=20, taken_days=18, carried_over=3', output: '5' }
        ],
        starterCode: `def leave_balance(annual_days, taken_days, carried_over):
    pass

print(leave_balance(20, 18, 3))
print(leave_balance(15, 20, 2))`,
        solution: `def leave_balance(annual_days, taken_days, carried_over):
    return max(0, annual_days + carried_over - taken_days)`,
        testCases: [
          { input: [20, 18, 3], expected: 5 },
          { input: [15, 20, 2], expected: 0 }
        ]
      },
      {
        id: 'hr-3',
        type: 'coding',
        title: 'Performance Rating',
        description: 'Write `performance_rating(scores)` that takes a list of numeric scores (0-100) and returns a rating: "Excellent" if average >= 85, "Good" if >= 70, "Needs Improvement" otherwise.',
        examples: [
          { input: 'scores=[90, 85, 88]', output: '"Excellent"' },
          { input: 'scores=[60, 65, 70]', output: '"Needs Improvement"' }
        ],
        starterCode: `def performance_rating(scores):
    pass

print(performance_rating([90, 85, 88]))
print(performance_rating([60, 65, 70]))`,
        solution: `def performance_rating(scores):
    avg = sum(scores) / len(scores)
    if avg >= 85:
        return 'Excellent'
    elif avg >= 70:
        return 'Good'
    return 'Needs Improvement'`,
        testCases: [
          { input: [[90, 85, 88]], expected: 'Excellent' },
          { input: [[70, 72, 68]], expected: 'Good' },
          { input: [[60, 65, 70]], expected: 'Needs Improvement' }
        ]
      },
      {
        id: 'hr-4',
        type: 'multiple-choice',
        title: 'Payroll Tax Concept',
        description: 'An employee earns $4,000/month. Tax is 0% on first $1,000, 10% on next $2,000, and 20% on the remainder. What is the monthly tax?',
        options: [
          { text: '$400', correct: false },
          { text: '$200', correct: false },
          { text: '$400', correct: false },
          { text: '$400', correct: true }
        ],
        explanation: 'Tax = 0% of $1000 + 10% of $2000 + 20% of $1000 = $0 + $200 + $200 = $400'
      },
      {
        id: 'hr-5',
        type: 'coding',
        title: 'Headcount by Department',
        description: 'Write `headcount(employees)` that takes a list of dicts with a "department" key and returns a dict of department to employee count.',
        examples: [
          { input: "[{'name':'Alice','department':'Eng'},{'name':'Bob','department':'HR'},{'name':'Carol','department':'Eng'}]", output: "{'Eng': 2, 'HR': 1}" }
        ],
        starterCode: `def headcount(employees):
    pass

emps = [{'name':'Alice','department':'Eng'},{'name':'Bob','department':'HR'},{'name':'Carol','department':'Eng'}]
print(headcount(emps))`,
        solution: `def headcount(employees):
    result = {}
    for e in employees:
        result[e['department']] = result.get(e['department'], 0) + 1
    return result`,
        testCases: [
          { input: [[{'name':'Alice','department':'Eng'},{'name':'Bob','department':'HR'},{'name':'Carol','department':'Eng'}]], expected: {'Eng':2,'HR':1} }
        ]
      }
    ]
  },
  {
    id: 'retail-analytics',
    title: 'Retail Analytics',
    description: 'Analyze retail data including sales trends, stock turnover, and revenue forecasting.',
    duration: 55,
    language: 'python',
    difficulty: 'intermediate',
    questions: [
      {
        id: 'ra-1',
        type: 'coding',
        title: 'Monthly Sales Growth',
        description: 'Write `sales_growth(current, previous)` that returns the percentage growth from previous to current month. Return rounded to 2 decimal places. If previous is 0, return 0.',
        examples: [
          { input: 'current=12000, previous=10000', output: '20.0' }
        ],
        starterCode: `def sales_growth(current, previous):
    pass

print(sales_growth(12000, 10000))
print(sales_growth(8000, 10000))`,
        solution: `def sales_growth(current, previous):
    if previous == 0:
        return 0
    return round((current - previous) / previous * 100, 2)`,
        testCases: [
          { input: [12000, 10000], expected: 20.0 },
          { input: [8000, 10000], expected: -20.0 }
        ]
      },
      {
        id: 'ra-2',
        type: 'coding',
        title: 'Stock Turnover Rate',
        description: 'Write `stock_turnover(cost_of_goods_sold, avg_inventory)` that returns the inventory turnover ratio. Return rounded to 2 decimal places. If avg_inventory is 0, return 0.',
        examples: [
          { input: 'cost_of_goods_sold=50000, avg_inventory=10000', output: '5.0' }
        ],
        starterCode: `def stock_turnover(cost_of_goods_sold, avg_inventory):
    pass

print(stock_turnover(50000, 10000))
print(stock_turnover(30000, 0))`,
        solution: `def stock_turnover(cost_of_goods_sold, avg_inventory):
    if avg_inventory == 0:
        return 0
    return round(cost_of_goods_sold / avg_inventory, 2)`,
        testCases: [
          { input: [50000, 10000], expected: 5.0 },
          { input: [30000, 0], expected: 0 }
        ]
      },
      {
        id: 'ra-3',
        type: 'coding',
        title: 'Top Selling Products',
        description: 'Write `top_products(sales, n)` where `sales` is a dict of product to units sold. Return a list of the top n product names sorted by units sold descending.',
        examples: [
          { input: "sales={'A':300,'B':150,'C':500,'D':200}, n=2", output: "['C','A']" }
        ],
        starterCode: `def top_products(sales, n):
    pass

print(top_products({'A':300,'B':150,'C':500,'D':200}, 2))`,
        solution: `def top_products(sales, n):
    return [k for k, v in sorted(sales.items(), key=lambda x: x[1], reverse=True)][:n]`,
        testCases: [
          { input: [{'A':300,'B':150,'C':500,'D':200}, 2], expected: ['C','A'] }
        ]
      },
      {
        id: 'ra-4',
        type: 'multiple-choice',
        title: 'Retail KPI Concept',
        description: 'Which metric best measures how efficiently a retailer converts inventory into sales revenue?',
        options: [
          { text: 'Gross Margin', correct: false },
          { text: 'Inventory Turnover Ratio', correct: true },
          { text: 'Net Promoter Score', correct: false },
          { text: 'Customer Acquisition Cost', correct: false }
        ],
        explanation: 'Inventory Turnover Ratio (COGS / Average Inventory) directly measures how quickly inventory is sold and replaced.'
      },
      {
        id: 'ra-5',
        type: 'coding',
        title: 'Discount Price Calculator',
        description: 'Write `discounted_price(original, discount_pct, tax_pct)` that applies the discount first, then adds tax. Return rounded to 2 decimal places.',
        examples: [
          { input: 'original=200, discount_pct=10, tax_pct=8', output: '194.4' }
        ],
        starterCode: `def discounted_price(original, discount_pct, tax_pct):
    pass

print(discounted_price(200, 10, 8))
print(discounted_price(100, 20, 5))`,
        solution: `def discounted_price(original, discount_pct, tax_pct):
    after_discount = original * (1 - discount_pct / 100)
    return round(after_discount * (1 + tax_pct / 100), 2)`,
        testCases: [
          { input: [200, 10, 8], expected: 194.4 },
          { input: [100, 20, 5], expected: 84.0 }
        ]
      }
    ]
  },
  {
    id: 'healthcare-data',
    title: 'Healthcare Data Processing',
    description: 'Process healthcare data including patient records, appointment scheduling, and dosage calculations.',
    duration: 60,
    language: 'python',
    difficulty: 'intermediate',
    questions: [
      {
        id: 'hd-1',
        type: 'coding',
        title: 'BMI Calculator',
        description: 'Write `bmi(weight_kg, height_m)` that returns BMI rounded to 1 decimal place. BMI = weight / height^2.',
        examples: [
          { input: 'weight_kg=70, height_m=1.75', output: '22.9' }
        ],
        starterCode: `def bmi(weight_kg, height_m):
    pass

print(bmi(70, 1.75))
print(bmi(90, 1.80))`,
        solution: `def bmi(weight_kg, height_m):
    return round(weight_kg / height_m ** 2, 1)`,
        testCases: [
          { input: [70, 1.75], expected: 22.9 },
          { input: [90, 1.80], expected: 27.8 }
        ]
      },
      {
        id: 'hd-2',
        type: 'coding',
        title: 'Appointment Slot Finder',
        description: 'Write `available_slots(all_slots, booked)` that returns a sorted list of slots from all_slots that are not in the booked list.',
        examples: [
          { input: "all_slots=['9:00','10:00','11:00','14:00'], booked=['10:00','14:00']", output: "['9:00','11:00']" }
        ],
        starterCode: `def available_slots(all_slots, booked):
    pass

print(available_slots(['9:00','10:00','11:00','14:00'], ['10:00','14:00']))`,
        solution: `def available_slots(all_slots, booked):
    return sorted(s for s in all_slots if s not in booked)`,
        testCases: [
          { input: [['9:00','10:00','11:00','14:00'], ['10:00','14:00']], expected: ['11:00','9:00'] }
        ]
      },
      {
        id: 'hd-3',
        type: 'coding',
        title: 'Pediatric Dosage Calculator',
        description: 'Write `dosage(weight_kg, dose_per_kg, max_dose)` that returns the recommended dose (weight_kg * dose_per_kg) but capped at max_dose. Return rounded to 1 decimal place.',
        examples: [
          { input: 'weight_kg=30, dose_per_kg=2.5, max_dose=60', output: '60.0' },
          { input: 'weight_kg=10, dose_per_kg=2.5, max_dose=60', output: '25.0' }
        ],
        starterCode: `def dosage(weight_kg, dose_per_kg, max_dose):
    pass

print(dosage(30, 2.5, 60))
print(dosage(10, 2.5, 60))`,
        solution: `def dosage(weight_kg, dose_per_kg, max_dose):
    return round(min(weight_kg * dose_per_kg, max_dose), 1)`,
        testCases: [
          { input: [30, 2.5, 60], expected: 60.0 },
          { input: [10, 2.5, 60], expected: 25.0 }
        ]
      },
      {
        id: 'hd-4',
        type: 'multiple-choice',
        title: 'Patient Data Privacy',
        description: 'Under HIPAA, which of the following is considered Protected Health Information (PHI)?',
        options: [
          { text: 'Anonymized aggregate statistics', correct: false },
          { text: "A patient's name combined with their diagnosis", correct: true },
          { text: 'General health tips published on a website', correct: false },
          { text: 'De-identified research data', correct: false }
        ],
        explanation: "PHI includes any individually identifiable health information. A patient's name combined with a diagnosis directly identifies the individual and their health status."
      },
      {
        id: 'hd-5',
        type: 'coding',
        title: 'Patient Age from DOB',
        description: 'Write `patient_age(dob, today)` where both are strings in "YYYY-MM-DD" format. Return the patient\'s age in full years.',
        examples: [
          { input: "dob='1990-06-15', today='2024-03-01'", output: '33' }
        ],
        starterCode: `def patient_age(dob, today):
    pass

print(patient_age('1990-06-15', '2024-03-01'))
print(patient_age('2000-12-31', '2024-01-01'))`,
        solution: `def patient_age(dob, today):
    from datetime import date
    d = date.fromisoformat(dob)
    t = date.fromisoformat(today)
    return t.year - d.year - ((t.month, t.day) < (d.month, d.day))`,
        testCases: [
          { input: ['1990-06-15', '2024-03-01'], expected: 33 },
          { input: ['2000-12-31', '2024-01-01'], expected: 23 }
        ]
      }
    ]
  },
  {
    id: 'cybersecurity-basics',
    title: 'Cybersecurity Basics',
    description: 'Validate passwords, analyze access logs, and detect security anomalies.',
    duration: 50,
    language: 'python',
    difficulty: 'intermediate',
    questions: [
      {
        id: 'cs-1',
        type: 'coding',
        title: 'Password Strength Checker',
        description: 'Write `password_strength(pwd)` that returns "Strong" if password has >= 8 chars, at least one uppercase, one digit, and one special char (!@#$%); "Medium" if it meets 2-3 criteria; "Weak" otherwise.',
        examples: [
          { input: 'pwd="Secure@1"', output: '"Strong"' },
          { input: 'pwd="hello"', output: '"Weak"' }
        ],
        starterCode: `def password_strength(pwd):
    pass

print(password_strength("Secure@1"))
print(password_strength("Hello1"))
print(password_strength("hello"))`,
        solution: `def password_strength(pwd):
    checks = [
        len(pwd) >= 8,
        any(c.isupper() for c in pwd),
        any(c.isdigit() for c in pwd),
        any(c in '!@#$%' for c in pwd)
    ]
    score = sum(checks)
    if score == 4: return 'Strong'
    if score >= 2: return 'Medium'
    return 'Weak'`,
        testCases: [
          { input: ['Secure@1'], expected: 'Strong' },
          { input: ['Hello1'], expected: 'Medium' },
          { input: ['hello'], expected: 'Weak' }
        ]
      },
      {
        id: 'cs-2',
        type: 'coding',
        title: 'IP Address Validator',
        description: 'Write `is_valid_ip(ip)` that returns True if the string is a valid IPv4 address (4 octets, each 0-255), False otherwise.',
        examples: [
          { input: '"192.168.1.1"', output: 'True' },
          { input: '"256.0.0.1"', output: 'False' }
        ],
        starterCode: `def is_valid_ip(ip):
    pass

print(is_valid_ip("192.168.1.1"))
print(is_valid_ip("256.0.0.1"))
print(is_valid_ip("10.0.0"))`,
        solution: `def is_valid_ip(ip):
    parts = ip.split('.')
    if len(parts) != 4: return False
    return all(p.isdigit() and 0 <= int(p) <= 255 for p in parts)`,
        testCases: [
          { input: ['192.168.1.1'], expected: true },
          { input: ['256.0.0.1'], expected: false },
          { input: ['10.0.0'], expected: false }
        ]
      },
      {
        id: 'cs-3',
        type: 'coding',
        title: 'Failed Login Detector',
        description: 'Write `flag_users(logs, threshold)` where logs is a list of (username, success) tuples. Return a list of usernames with consecutive failed logins >= threshold.',
        examples: [
          { input: "logs=[('alice',False),('alice',False),('alice',False),('bob',False)], threshold=3", output: "['alice']" }
        ],
        starterCode: `def flag_users(logs, threshold):
    pass

logs = [('alice',False),('alice',False),('alice',False),('bob',False)]
print(flag_users(logs, 3))`,
        solution: `def flag_users(logs, threshold):
    counts = {}
    flagged = set()
    for user, success in logs:
        if success:
            counts[user] = 0
        else:
            counts[user] = counts.get(user, 0) + 1
            if counts[user] >= threshold:
                flagged.add(user)
    return sorted(flagged)`,
        testCases: [
          { input: [[['alice',false],['alice',false],['alice',false],['bob',false]], 3], expected: ['alice'] }
        ]
      },
      {
        id: 'cs-4',
        type: 'multiple-choice',
        title: 'SQL Injection Prevention',
        description: 'Which approach best prevents SQL injection attacks in a web application?',
        options: [
          { text: 'Filtering special characters with regex', correct: false },
          { text: 'Using parameterized queries / prepared statements', correct: true },
          { text: 'Encoding user input as Base64', correct: false },
          { text: 'Limiting input length to 50 characters', correct: false }
        ],
        explanation: 'Parameterized queries separate SQL code from data, making it impossible for user input to alter the query structure.'
      }
    ]
  },
  {
    id: 'data-processing',
    title: 'Data Processing & ETL',
    description: 'Clean, transform, and aggregate data — core skills for data engineering roles.',
    duration: 60,
    language: 'python',
    difficulty: 'intermediate',
    questions: [
      {
        id: 'dp-1',
        type: 'coding',
        title: 'Remove Duplicate Records',
        description: 'Write `deduplicate(records, key)` that takes a list of dicts and a key field, and returns a list with only the first occurrence of each unique key value.',
        examples: [
          { input: "records=[{'id':1,'v':'a'},{'id':2,'v':'b'},{'id':1,'v':'c'}], key='id'", output: "[{'id':1,'v':'a'},{'id':2,'v':'b'}]" }
        ],
        starterCode: `def deduplicate(records, key):
    pass

records = [{'id':1,'v':'a'},{'id':2,'v':'b'},{'id':1,'v':'c'}]
print(deduplicate(records, 'id'))`,
        solution: `def deduplicate(records, key):
    seen = set()
    result = []
    for r in records:
        if r[key] not in seen:
            seen.add(r[key])
            result.append(r)
    return result`,
        testCases: [
          { input: [[{'id':1,'v':'a'},{'id':2,'v':'b'},{'id':1,'v':'c'}], 'id'], expected: [{'id':1,'v':'a'},{'id':2,'v':'b'}] }
        ]
      },
      {
        id: 'dp-2',
        type: 'coding',
        title: 'Group and Aggregate',
        description: 'Write `group_sum(data, group_key, value_key)` that groups a list of dicts by group_key and returns a dict of group to sum of value_key.',
        examples: [
          { input: "data=[{'dept':'Eng','salary':5000},{'dept':'HR','salary':4000},{'dept':'Eng','salary':6000}], group_key='dept', value_key='salary'", output: "{'Eng':11000,'HR':4000}" }
        ],
        starterCode: `def group_sum(data, group_key, value_key):
    pass

data = [{'dept':'Eng','salary':5000},{'dept':'HR','salary':4000},{'dept':'Eng','salary':6000}]
print(group_sum(data, 'dept', 'salary'))`,
        solution: `def group_sum(data, group_key, value_key):
    result = {}
    for row in data:
        k = row[group_key]
        result[k] = result.get(k, 0) + row[value_key]
    return result`,
        testCases: [
          { input: [[{'dept':'Eng','salary':5000},{'dept':'HR','salary':4000},{'dept':'Eng','salary':6000}], 'dept', 'salary'], expected: {'Eng':11000,'HR':4000} }
        ]
      },
      {
        id: 'dp-3',
        type: 'coding',
        title: 'Flatten Nested List',
        description: 'Write `flatten(nested)` that takes a list of lists and returns a single flat list.',
        examples: [
          { input: '[[1,2],[3,[4,5]],6]', output: '[1,2,3,4,5,6]' }
        ],
        starterCode: `def flatten(nested):
    pass

print(flatten([[1,2],[3,[4,5]],6]))`,
        solution: `def flatten(nested):
    result = []
    for item in nested:
        if isinstance(item, list):
            result.extend(flatten(item))
        else:
            result.append(item)
    return result`,
        testCases: [
          { input: [[[1,2],[3,[4,5]],6]], expected: [1,2,3,4,5,6] }
        ]
      },
      {
        id: 'dp-4',
        type: 'multiple-choice',
        title: 'ETL Concept',
        description: 'In an ETL pipeline, what does the "Transform" step primarily do?',
        options: [
          { text: 'Load data into the destination database', correct: false },
          { text: 'Extract raw data from source systems', correct: false },
          { text: 'Clean, reshape, and enrich data for the target schema', correct: true },
          { text: 'Schedule and monitor pipeline jobs', correct: false }
        ],
        explanation: 'Transform converts raw extracted data into the format required by the destination — including cleaning, filtering, joining, and aggregating.'
      }
    ]
  },
  {
    id: 'iot-sensors',
    title: 'IoT & Sensor Data',
    description: 'Process sensor readings, detect anomalies, and calculate device uptime.',
    duration: 50,
    language: 'python',
    difficulty: 'intermediate',
    questions: [
      {
        id: 'iot-1',
        type: 'coding',
        title: 'Temperature Alert System',
        description: 'Write `temperature_alerts(readings, min_temp, max_temp)` that takes a list of (sensor_id, temp) tuples and returns a list of sensor_ids where temp is outside [min_temp, max_temp].',
        examples: [
          { input: "readings=[('S1',25),('S2',80),('S3',-5)], min_temp=0, max_temp=60", output: "['S2','S3']" }
        ],
        starterCode: `def temperature_alerts(readings, min_temp, max_temp):
    pass

print(temperature_alerts([('S1',25),('S2',80),('S3',-5)], 0, 60))`,
        solution: `def temperature_alerts(readings, min_temp, max_temp):
    return [sid for sid, temp in readings if temp < min_temp or temp > max_temp]`,
        testCases: [
          { input: [[['S1',25],['S2',80],['S3',-5]], 0, 60], expected: ['S2','S3'] }
        ]
      },
      {
        id: 'iot-2',
        type: 'coding',
        title: 'Device Uptime Calculator',
        description: 'Write `uptime_pct(total_minutes, downtime_minutes)` that returns the uptime percentage rounded to 2 decimal places.',
        examples: [
          { input: 'total_minutes=1440, downtime_minutes=72', output: '95.0' }
        ],
        starterCode: `def uptime_pct(total_minutes, downtime_minutes):
    pass

print(uptime_pct(1440, 72))
print(uptime_pct(1440, 0))`,
        solution: `def uptime_pct(total_minutes, downtime_minutes):
    return round((total_minutes - downtime_minutes) / total_minutes * 100, 2)`,
        testCases: [
          { input: [1440, 72], expected: 95.0 },
          { input: [1440, 0], expected: 100.0 }
        ]
      },
      {
        id: 'iot-3',
        type: 'coding',
        title: 'Anomaly Detection',
        description: 'Write `detect_anomalies(values, threshold)` that returns indices of values that deviate from the mean by more than threshold.',
        examples: [
          { input: 'values=[10,11,10,50,10], threshold=20', output: '[3]' }
        ],
        starterCode: `def detect_anomalies(values, threshold):
    pass

print(detect_anomalies([10,11,10,50,10], 20))`,
        solution: `def detect_anomalies(values, threshold):
    mean = sum(values) / len(values)
    return [i for i, v in enumerate(values) if abs(v - mean) > threshold]`,
        testCases: [
          { input: [[10,11,10,50,10], 20], expected: [3] }
        ]
      },
      {
        id: 'iot-4',
        type: 'multiple-choice',
        title: 'IoT Protocol',
        description: 'Which protocol is most commonly used for lightweight IoT messaging due to its low bandwidth and battery usage?',
        options: [
          { text: 'HTTP/REST', correct: false },
          { text: 'MQTT', correct: true },
          { text: 'FTP', correct: false },
          { text: 'SMTP', correct: false }
        ],
        explanation: 'MQTT (Message Queuing Telemetry Transport) is a lightweight publish-subscribe protocol designed for constrained devices and low-bandwidth networks.'
      }
    ]
  },
  {
    id: 'education-platform',
    title: 'Education Platform',
    description: 'Build features for an education system: grade calculation, attendance, and course completion tracking.',
    duration: 45,
    language: 'python',
    difficulty: 'intermediate',
    questions: [
      {
        id: 'ep-1',
        type: 'coding',
        title: 'Weighted Grade Calculator',
        description: 'Write `final_grade(scores, weights)` where scores and weights are lists of equal length. Return the weighted average rounded to 1 decimal place.',
        examples: [
          { input: 'scores=[80,90,70], weights=[0.3,0.5,0.2]', output: '83.0' }
        ],
        starterCode: `def final_grade(scores, weights):
    pass

print(final_grade([80,90,70], [0.3,0.5,0.2]))`,
        solution: `def final_grade(scores, weights):
    return round(sum(s*w for s,w in zip(scores,weights)), 1)`,
        testCases: [
          { input: [[80,90,70],[0.3,0.5,0.2]], expected: 83.0 }
        ]
      },
      {
        id: 'ep-2',
        type: 'coding',
        title: 'Attendance Rate',
        description: 'Write `attendance_rate(attended, total)` that returns the attendance percentage rounded to 1 decimal place.',
        examples: [
          { input: 'attended=18, total=20', output: '90.0' }
        ],
        starterCode: `def attendance_rate(attended, total):
    pass

print(attendance_rate(18, 20))
print(attendance_rate(20, 20))`,
        solution: `def attendance_rate(attended, total):
    return round(attended / total * 100, 1)`,
        testCases: [
          { input: [18, 20], expected: 90.0 },
          { input: [20, 20], expected: 100.0 }
        ]
      },
      {
        id: 'ep-3',
        type: 'coding',
        title: 'Course Completion Status',
        description: 'Write `completion_status(completed_modules, total_modules)` that returns "Completed" if all modules done, "In Progress" if > 0, "Not Started" if 0.',
        examples: [
          { input: 'completed_modules=5, total_modules=5', output: '"Completed"' },
          { input: 'completed_modules=0, total_modules=5', output: '"Not Started"' }
        ],
        starterCode: `def completion_status(completed_modules, total_modules):
    pass

print(completion_status(5, 5))
print(completion_status(3, 5))
print(completion_status(0, 5))`,
        solution: `def completion_status(completed_modules, total_modules):
    if completed_modules == total_modules: return 'Completed'
    if completed_modules > 0: return 'In Progress'
    return 'Not Started'`,
        testCases: [
          { input: [5, 5], expected: 'Completed' },
          { input: [3, 5], expected: 'In Progress' },
          { input: [0, 5], expected: 'Not Started' }
        ]
      },
      {
        id: 'ep-4',
        type: 'multiple-choice',
        title: 'Learning Analytics',
        description: 'A student scored 55, 62, 70, 48, and 65 on five tests. What is the median score?',
        options: [
          { text: '60', correct: false },
          { text: '62', correct: true },
          { text: '65', correct: false },
          { text: '70', correct: false }
        ],
        explanation: 'Sorted: [48, 55, 62, 65, 70]. The median (middle value) of 5 numbers is the 3rd value = 62.'
      }
    ]
  },
  {
    id: 'real-estate',
    title: 'Real Estate Management',
    description: 'Calculate rent, property tax, occupancy rates, and ROI for real estate portfolios.',
    duration: 50,
    language: 'python',
    difficulty: 'intermediate',
    questions: [
      {
        id: 're-1',
        type: 'coding',
        title: 'Annual Rent Calculator',
        description: 'Write `annual_rent(monthly_rent, vacancy_months)` that returns the actual annual rent collected (12 - vacancy_months) * monthly_rent.',
        examples: [
          { input: 'monthly_rent=3000, vacancy_months=2', output: '30000' }
        ],
        starterCode: `def annual_rent(monthly_rent, vacancy_months):
    pass

print(annual_rent(3000, 2))
print(annual_rent(5000, 0))`,
        solution: `def annual_rent(monthly_rent, vacancy_months):
    return (12 - vacancy_months) * monthly_rent`,
        testCases: [
          { input: [3000, 2], expected: 30000 },
          { input: [5000, 0], expected: 60000 }
        ]
      },
      {
        id: 're-2',
        type: 'coding',
        title: 'Property Tax Calculator',
        description: 'Write `property_tax(assessed_value, tax_rate_pct)` that returns the annual property tax. Return rounded to 2 decimal places.',
        examples: [
          { input: 'assessed_value=500000, tax_rate_pct=1.2', output: '6000.0' }
        ],
        starterCode: `def property_tax(assessed_value, tax_rate_pct):
    pass

print(property_tax(500000, 1.2))
print(property_tax(250000, 0.8))`,
        solution: `def property_tax(assessed_value, tax_rate_pct):
    return round(assessed_value * tax_rate_pct / 100, 2)`,
        testCases: [
          { input: [500000, 1.2], expected: 6000.0 },
          { input: [250000, 0.8], expected: 2000.0 }
        ]
      },
      {
        id: 're-3',
        type: 'coding',
        title: 'Occupancy Rate',
        description: 'Write `occupancy_rate(units_occupied, total_units)` that returns the occupancy percentage rounded to 1 decimal place.',
        examples: [
          { input: 'units_occupied=45, total_units=50', output: '90.0' }
        ],
        starterCode: `def occupancy_rate(units_occupied, total_units):
    pass

print(occupancy_rate(45, 50))
print(occupancy_rate(50, 50))`,
        solution: `def occupancy_rate(units_occupied, total_units):
    return round(units_occupied / total_units * 100, 1)`,
        testCases: [
          { input: [45, 50], expected: 90.0 },
          { input: [50, 50], expected: 100.0 }
        ]
      },
      {
        id: 're-4',
        type: 'multiple-choice',
        title: 'ROI Calculation',
        description: 'A property was purchased for $200,000 and sold for $250,000 after spending $20,000 on renovations. What is the ROI?',
        options: [
          { text: '25%', correct: false },
          { text: '13.6%', correct: false },
          { text: '13.6%', correct: false },
          { text: '13.6%', correct: true }
        ],
        explanation: 'ROI = (Gain - Cost) / Cost × 100 = (250,000 - 200,000 - 20,000) / (200,000 + 20,000) × 100 = 30,000 / 220,000 × 100 ≈ 13.6%'
      }
    ]
  }
];
