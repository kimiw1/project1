# -*- coding: utf-8 -*-
"""
Created on Thu Nov 29 15:21:58 2018

@author: kimiw
"""
#우울한 챗봇

import random

feeling = ("Feeling", "How's it going?", "condition", "today's feeling")
feeling_responses = ["soso", "not good", "I want break time"]
why = ("why", "what's up?", "what's the reason?")
why_responses = ["I don't know, as it is", "I'm tired", "There are too much things to do"]
how = ("How can I help you?", "how your feeling can be better?", "how better?", "what can help you?")
how_responses = ["give me just little time", "Please finish this semester", "Give me vacation"]
other = ("what about other things?", "other ways?")
other_responses = ["travel other countries", "eat delicious food", "meet my friends"]


def Ask_feeling(user_message):
    for feeling in user_message.split(","):
        if feeling.lower() in feeling:
            return random.choice(feeling_responses)
        
        
def Ask_why(user_message):
    for why in user_message.split(","):
        if why.lower() in why:
            return random.choice(why_responses)
 
                      

def Ask_how(user_message):
    for how in user_message.split(","):
        if how.lower() in how:
            return random.choice(how_responses)
        

def Ask_other(user_message):
    for other in user_message.split(","):
        if other.lower() in other:
            return random.choice(other_responses)
        
while True:
    user_message = input("To sad chatbot:")
    if user_message == "feeling":
        print(Ask_feeling(user_message)) 
    if user_message == "what's the reason?":
        print(Ask_why(user_message))
    if user_message == 'how better?':
        print(Ask_how(user_message))
    if user_message == 'other ways?':
        print(Ask_other(user_message))
    if user_message == 'bye':
        print("see you soon~")
        break

        


