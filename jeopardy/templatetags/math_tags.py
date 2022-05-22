from django import template

register = template.Library()

@register.filter(name='multiply')
def multiply(value, multiplier):
    return value*multiplier
