import 'module-alias/register'
import app from '@/main/server'

app.listen(5050, () => console.log('Server is listening on port 5050'))
