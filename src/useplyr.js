import { useEffect,useState } from 'react'
import Plyr from 'plyr';


function usePlyr(plyrEl, options) {
    const [player, setPlayer ] = useState(null)
    useEffect(() => {
        let player = new Plyr(plyrEl.current,options)
        player.source = options.source
        setPlayer(player)
        return () => {
          player.destroy();
        }
      }, [options, plyrEl])
      return player
}

export default usePlyr