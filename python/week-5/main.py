# Parent Class
class Device:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

    def turn_on(self):
        print(f"{self.brand} {self.model} is now ON 🔋")

    def turn_off(self):
        print(f"{self.brand} {self.model} is now OFF 📴")


# Child Class (inherits from Device)
class Smartphone(Device):
    def __init__(self, brand, model, storage, battery):
        super().__init__(brand, model)   # Call parent constructor
        self.storage = storage
        self.battery = battery

    def make_call(self, contact):
        print(f"Calling {contact} 📞...")

    def charge(self, percent):
        self.battery += percent
        if self.battery > 100:
            self.battery = 100
        print(f"{self.brand} charged to {self.battery}% ⚡")


# Creating objects
phone1 = Smartphone("Samsung", "S24", "256GB", 50)
phone2 = Smartphone("Apple", "iPhone 15", "128GB", 80)

# Using methods
phone1.turn_on()
phone1.make_call("John")
phone1.charge(30)

phone2.turn_on()
phone2.make_call("Alice")
phone2.turn_off()

#Polymorphism 
class Vehicle:
    def move(self):
        print("The vehicle is moving...")

class Car(Vehicle):
    def move(self):
        print("Driving 🚗")

class Plane(Vehicle):
    def move(self):
        print("Flying ✈️")

class Boat(Vehicle):
    def move(self):
        print("Sailing 🚤")

# Polymorphism in action
vehicles = [Car(), Plane(), Boat()]

for v in vehicles:
    v.move()
