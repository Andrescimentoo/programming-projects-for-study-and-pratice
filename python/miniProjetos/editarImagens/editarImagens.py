from PIL import Image, ImageDraw, ImageFont
import os

imagem = Image.open("assets/imagemTerritorio1AeB.jpg") #pegamos a imagem
desenho = ImageDraw.Draw(imagem)
fonte = ImageFont.load_default()

x,y = 100,10
novoTexto = "set"

desenho.text((x,y),novoTexto,
fill="black", font=fonte)

