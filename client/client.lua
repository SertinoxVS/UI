local function SetNuiFocusKeep(bool)
    SetNuiFocusKeepInput(bool)
    Citizen.CreateThread(function()
        while IsNuiFocused() do 
            for k,v in pairs({1, 2, 3, 4, 5, 6, 18, 24, 25, 37, 68, 69, 70, 91, 92, 142, 182, 199, 200, 245, 257, 36}) do 
                DisableControlAction(0, v, true)
            end
            Wait(0)
        end
    end)
end

local function toggleNuiFrame(shouldShow, moove)
    SetNuiFocus(shouldShow, shouldShow)

    -- if moove then
    --     SetNuiFocusKeep(shouldShow)
    -- end
    SendReactMessage('setVisible', shouldShow)
end

local function setPage(pageName, moove)
    toggleNuiFrame(true, moove)
    SendReactMessage('setPage', pageName)
end

RegisterNetEvent("YBN.UI:Open")
AddEventHandler("YBN.UI:Open", function(moove)
    toggleNuiFrame(true, moove)
end)

RegisterNetEvent("YBN.UI:Close")
AddEventHandler("YBN.UI:Close", function()
    toggleNuiFrame(false)
end)

RegisterNetEvent("YBN.UI:setPage")
AddEventHandler("YBN.UI:setPage", function(pageName, eventData, data, moove)
    setPage(pageName, moove)
    if eventData then
        SendReactMessage(eventData, data and data or {})
    end
end)

RegisterNetEvent("YBN.UI:SendReactMessage")
AddEventHandler("YBN.UI:SendReactMessage", function(eventData, data)
    SendReactMessage(eventData, data and data or {})
end)

RegisterNUICallback('hideFrame', function(_, cb)
    local page = _.page
    toggleNuiFrame(false)
    TriggerEvent("YBN.UI:OnClose", page)
    cb({})
end)

RegisterNUICallback('unavailable', function(_, cb)
    toggleNuiFrame(false)
    TriggerEvent("YBN:Notify", GetLabelText("MPCT_UNAVAIL0"))
    cb({})
end)

RegisterNUICallback('createNotification', function(data, cb)
    TriggerEvent("YBN:Notify", data.content)
end)