# Bob's Bagels

| Method                             | Input                | Scenario                                                                                                                          | Outputs               |
|------------------------------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------|-----------------------|
| Add Bagel to basket                | Bagel                | When a new bagel is added, ensure it's stored in the basket                                                                       | push to basket []     |
| Remove Bagel from basket           | Bagel                | When a customer rquests removal of a bagel, ensure its removed from the basket                                                    | update basket []      |
|                                    |                      |                                                                                                                                   |                       |
| Full Basket Prompt                 | Bagel x Max Capacity | When a customer attempts to add another item to the basket when it is full, it will prompt the user that the basket is full       | 'Basket is Full'      |
| Create Large Baskets               | Basket Capacity      | If a manager wants to create a basket to suit a bigger order, allow the manager to create a custom size basket                    |                       |
| Removing an item that doesnt exist | Bagel (non-existing) | When a item is prompted to be removed and the item isn't listed in the basket, prompt the user that the item doesn't exist        | 'Item doesn't exist'  |
| Adding an item that already exists | Bagel (pre-existing) | When a customer goes to add an item that already exists within the basket, prompt the user that the item is already in the basket | 'Item already exists' |
|                                    |                      |                                                                                                                                   |                       |
| Item Price Check                   | Bagel                | Allows customers to input a type of bagel and return the price of the bagel                                                       | BagelPrice            |
| Total Basket Sum                   | none                 | When a customer goes to checkout, it will print the total sum of all items within the basket                                      | BasketSum             |



![](./_images/bagels.jpg)

### Bob needs you!

He wants you to implement a simple basket feature for him.

### From User Stories to a Domain Model

In this challenge, you will transform User Stories into a Domain Model and test-drive developing a program that satisfies the stories.

A **User Story** describes one thing a program is expected to do, from the perspective of somebody using that program. When planning a program, the client's requirements will be decomposed into many User Stories. Much of a developer's life is spent translating User Stories into a functional system. In Object-Oriented Programming, these systems are made up of **Objects** and **Messages**. Objects describe the objects within the system, and Messages describe how those objects interact. We call these systems **Domain Models**.


## User Stories

```
# Part 1
As a member of the public
So I can order a bagel when I want to
I'd like to add an item to my basket

As a member of the public,
So that I can change my order
I'd like to remove an item from my basket
```
---
```
# Part 2
As a member of the public,
So that I can not overfill my small bagel basket
I'd like to know when my basket is full when I try adding an item beyond my basket capacity.

As a Bob's Bagels manager,
So that I can record more sales
I’d like to create baskets with larger capacity when I need to.

As a member of the public
So that I can maintain my sanity
I'd like to know if I try to remove an item that doesn't exist in my basket. In the same way, I want to know if I try to add an item with the same ID already in my basket.
```
---
```
# Part 3
As a member of the public,
So that I can know how much my bagels are,
I’d like to see the price of each item before I add it to my basket.

As a member of the public,
So that I can prepare to pay
When I go to checkout I'd like to know the total sum of the bagels in my basket
```
