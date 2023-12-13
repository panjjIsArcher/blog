export function particle(mark, nums = 100) {

    const particles = [] // 存储粒子实例的数组
    const gap = 120; // 粒子之间连接线条
    const gapColor = "rgba(255, 255, 255, 0.5)" // 粒子和线条之间的rgb色值
    let interactionParticle = null // 随着鼠标移动的单个粒子

    const canvas = document.querySelector(mark)
    // 
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    class Particle {
        constructor(x, y, velocityX, velocityY, size, color) {
            this.x = x;
            this.y = y;
            this.velocityX = velocityX;
            this.velocityY = velocityY;
            this.size = size;
            this.color = color;
            this.ctx = ctx;

        }
        // 绘制单个的粒子
        draw(ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
            ctx.fillStyle = this.color
            ctx.fill()
        }
        update(ctx) {
            if (this.x < 0 || this.x > canvas.width) {
                this.velocityX *= -1
            }
            if (this.y < 0 || this.y > canvas.height) {
                this.velocityY *= -1
            }
            this.x += this.velocityX
            this.y += this.velocityY
            this.draw(ctx)
        }


    }

    const getRandomArbitary = (min = 0, max = 0) => {
        return Math.random() * (max - min) + min
    }

    const create = () => {
        for (let i = 0; i < nums; i++) {
            const size = getRandomArbitary(1, 3)
            const x = Math.random() * canvas.width
            const y = Math.random() * canvas.height
            const velocityX = getRandomArbitary(-2, 2)
            const velocityY = getRandomArbitary(-2, 2)
            const color = "rgb(255,255,255)"
            const instance = new Particle(x, y, velocityX, velocityY, size, color)
            particles.push(instance)
        }
    }

    const animation = () => {
        requestAnimationFrame(animation)
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        particles.forEach(particle => {
            particle.update(ctx)
        })
        connect()
    }

    const connect = () => {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const p1 = particles[i]
                const p2 = particles[j]
                // 勾股定理计算
                const distance = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2))
                if (distance < gap) {
                    ctx.strokeStyle = gapColor
                    ctx.beginPath()
                    ctx.lineWidth = 0.8
                    ctx.moveTo(p1.x, p1.y)
                    ctx.lineTo(p2.x, p2.y)
                    ctx.stroke()
                }
            }
        }
    }

    create()
    animation()
}

